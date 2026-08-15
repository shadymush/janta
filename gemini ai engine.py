import json
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from pydantic import BaseModel

app = FastAPI()

# Enable CORS for local frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY", "YOUR_OPENAI_API_KEY"))


class CVData(BaseModel):
    name: str
    email: str
    skills: str
    experience: str


class MatchRequest(BaseModel):
    cv: CVData
    job_description: str


class EnhanceRequest(BaseModel):
    job_title: str
    raw_experience: str


@app.post("/match")
def match_job(data: MatchRequest):
    """Calculates ATS match score & missing keywords between CV and Job Description."""
    prompt = f"""
    Compare this candidate CV with the Job Description.
    CV Skills: {data.cv.skills}
    CV Experience: {data.cv.experience}

    Job Description: {data.job_description}

    Return JSON strictly with format:
    {{
        "match_score": <number between 0-100>,
        "matching_skills": ["skill1", "skill2"],
        "missing_keywords": ["keyword1", "keyword2"],
        "recommendations": "string summarizing advice"
    }}
    """
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            response_format={"type": "json_object"},
            messages=[{"role": "user", "content": prompt}],
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/enhance-bullets")
def enhance_bullets(data: EnhanceRequest):
    """Generates optimized bullet points for CV experience."""
    prompt = f"""
    Rewrite the following work experience into 3 impactful, bullet points tailored for a {data.job_title} role.
    Use strong action verbs and quantitative metrics.

    Raw Experience: {data.raw_experience}
    Return JSON format: {{"bullet_points": ["bullet 1", "bullet 2", "bullet 3"]}}
    """
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            response_format={"type": "json_object"},
            messages=[{"role": "user", "content": prompt}],
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)