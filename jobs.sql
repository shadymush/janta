-- =====================================================
-- JANTA Job Portal - Job Listings Database
-- =====================================================

-- Jobs table structure
CREATE TABLE IF NOT EXISTS `jobs` (
  `id`              INT AUTO_INCREMENT PRIMARY KEY,
  `title`           VARCHAR(255) NOT NULL,
  `company`         VARCHAR(255) NOT NULL,
  `location`        VARCHAR(255) NOT NULL,
  `salary_max`      INT NOT NULL,
  `employment_type` VARCHAR(100) NOT NULL,
  `schedule_type`   VARCHAR(100) NOT NULL,
  `tags`            VARCHAR(255) DEFAULT '',
  `posted_date`     DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Dumping default job listings
-- =====================================================

INSERT INTO `jobs`
  (`title`, `company`, `location`, `salary_max`, `employment_type`, `schedule_type`, `tags`, `posted_date`)
VALUES
  ('Software Engineer',  'Safaricom PLC', 'Nairobi, Kenya', 200000, 'Remote',  'Full Time', 'Mid Level', '2026-05-20 00:00:00'),
  ('Marketing Manager',  'Twiga Foods',   'Nairobi, Kenya', 150000, 'On-site', 'Full Time', '',          '2026-05-18 00:00:00'),
  ('Product Designer',   'KOKO Networks', 'Remote',         220000, 'Remote',  'Part Time', 'Senior',    '2026-05-15 00:00:00'),
  ('Creative Director',  'Ogilvy Africa', 'Nairobi, Kenya', 300000, 'On-site', 'Full Time', 'Executive', '2026-05-12 00:00:00'),
  ('Wordpress Developer','JANTA Studios', 'Remote',         100000, 'Remote',  'Freelance', 'Junior',    '2026-05-10 00:00:00'),
  ('Data Analyst',       'Equity Bank',   'Nairobi, Kenya', 150000, 'Hybrid',  'Full Time', 'Hybrid',    '2026-05-08 00:00:00');
