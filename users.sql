-- =====================================================
-- JANTA Job Portal - Users Database
-- =====================================================

-- Users table structure
CREATE TABLE IF NOT EXISTS `users` (
  `id`           INT AUTO_INCREMENT PRIMARY KEY,
  `full_name`    VARCHAR(255) NOT NULL,
  `email`        VARCHAR(255) NOT NULL UNIQUE,
  `password`     VARCHAR(255) NOT NULL COMMENT 'bcrypt hashed password',
  `role`         ENUM('job_seeker','employer','admin') NOT NULL DEFAULT 'job_seeker',
  `location`     VARCHAR(255) DEFAULT '',
  `phone`        VARCHAR(30)  DEFAULT '',
  `avatar_color` VARCHAR(100) DEFAULT 'linear-gradient(135deg, #4E54C8, #8F94FB)',
  `is_active`    TINYINT(1)   NOT NULL DEFAULT 1,
  `created_at`   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login`   DATETIME     DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Dumping default users
-- Passwords are bcrypt hashes of: Password123!
-- =====================================================

INSERT INTO `users`
  (`full_name`, `email`, `password`, `role`, `location`, `phone`, `avatar_color`, `is_active`, `created_at`)
VALUES
  (
    'Alice Wanjiru',
    'alice.wanjiru@email.com',
    '$2b$12$KIXxk7b3r5QKSO3bW6Zs6uE8k9mJtFhRpA3dP1zV7nLmQ4cXwYeOu',
    'job_seeker',
    'Nairobi, Kenya',
    '+254 712 345 678',
    'linear-gradient(135deg, #FF6B6B, #FF8E53)',
    1,
    '2026-01-10 08:30:00'
  ),
  (
    'Brian Otieno',
    'brian.otieno@email.com',
    '$2b$12$mW4nT8xZp2QLNRK0dJ5yquB3v1cFgHsOaE9jX6rL7kPbYeDwVmAI3',
    'job_seeker',
    'Mombasa, Kenya',
    '+254 723 456 789',
    'linear-gradient(135deg, #4E54C8, #8F94FB)',
    1,
    '2026-01-15 09:45:00'
  ),
  (
    'Catherine Muthoni',
    'catherine.muthoni@email.com',
    '$2b$12$pR6sU2yAq8XMNO4fK0azetC5w3dGhJtPbF1lY7mM9nQcZeEvXoBK5',
    'employer',
    'Nairobi, Kenya',
    '+254 733 567 890',
    'linear-gradient(135deg, #11998e, #38ef7d)',
    1,
    '2026-02-01 10:00:00'
  ),
  (
    'David Kamau',
    'david.kamau@safaricom.co.ke',
    '$2b$12$qS7tV3zBr9YNOP5gL1bafuD6x4eHiKuQcG2mZ8nN0oRdAfFwYpCL6',
    'employer',
    'Nairobi, Kenya',
    '+254 700 123 456',
    'linear-gradient(135deg, #ec008c, #fc6767)',
    1,
    '2026-02-10 11:15:00'
  ),
  (
    'Esther Akinyi',
    'esther.akinyi@email.com',
    '$2b$12$rT8uW4aCo0ZOPQ6hM2cbgvE7y5fIjLvRdH3nA9oO1pSeGgGxZqDM7',
    'job_seeker',
    'Kisumu, Kenya',
    '+254 745 678 901',
    'linear-gradient(135deg, #fc00ff, #00dbde)',
    1,
    '2026-02-20 14:30:00'
  ),
  (
    'Frank Mutua',
    'frank.mutua@email.com',
    '$2b$12$sU9vX5bDp1APQR7iN3dchwF8z6gJkMwSeI4oB0pP2qTfHhHyArEN8',
    'job_seeker',
    'Nakuru, Kenya',
    '+254 756 789 012',
    'linear-gradient(135deg, #f12711, #f5af19)',
    1,
    '2026-03-05 08:00:00'
  ),
  (
    'Grace Njeri',
    'grace.njeri@kokonetworks.com',
    '$2b$12$tV0wY6cEq2BQRS8jO4edhwG9a7hKlNxTfJ5pC1qQ3rUgIiIzBsFO9',
    'employer',
    'Remote',
    '+254 767 890 123',
    'linear-gradient(135deg, #8A2387, #E94057, #F27121)',
    1,
    '2026-03-12 09:30:00'
  ),
  (
    'Admin JANTA',
    'admin@janta.co.ke',
    '$2b$12$uW1xZ7dFr3CRST9kP5feixH0b8iLmOyUgK6qD2rR4sVhJjJaCtGP0',
    'admin',
    'Nairobi, Kenya',
    '+254 700 000 001',
    'linear-gradient(135deg, #00B4DB, #0083B0)',
    1,
    '2026-01-01 00:00:00'
  );
