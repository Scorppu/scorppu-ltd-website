-- members
INSERT OR IGNORE INTO members (slug, handle, name, role, short_bio, bio, image_url, cv_url, cv_filename) VALUES
  ('scorppu', 'Scorppu', 'Eugene Chan', 'Founder & CEO',
   'Computer Engineer with hands-on experience in full-stack development, systems programming, and GPU acceleration.',
   'Final-year Computer Engineering student at CUHK and part-time Software Engineer at Efinix, building cross-platform apps with Python and Flutter. Passionate about systems programming, GPU acceleration, and — when away from the keyboard — lifting weights and gaming on Minecraft and CS.',
   '/profilePics/scorppu.jpg', '/cvs/ChanEugeneCV.pdf', 'ChanEugeneCV'),
  ('prince', 'Prince', 'Brian Wong', 'Software Engineer',
   'Graphics Engineering Expert', '', '/profilePics/prince.jpg', NULL, NULL),
  ('edgeman475', 'Edgeman475', 'Dawn Chan', 'Software Engineer',
   'Computer Engineer with strong background in both software and hardware applications',
   '', '/profilePics/edgeman.jpg', NULL, NULL),
  ('korbi', 'Korbi', 'Eddie Wong', 'Civil Engineer',
   '', '', '/profilePics/korbi.jpg', NULL, NULL);

-- member_socials
INSERT OR IGNORE INTO member_socials (slug, linkedin, github, youtube, twitter, instagram) VALUES
  ('scorppu',
   'https://www.linkedin.com/in/eugenechan111/',
   'https://github.com/Scorppu',
   'https://youtube.com/@scorppu',
   'https://twitter.com/scorppu',
   'https://instagram.com/eugenechan0_o'),
  ('prince', NULL, 'https://github.com/Princebw225', NULL, NULL, 'https://www.instagram.com/prince_bw225'),
  ('edgeman475', NULL, 'https://github.com/din-dawn', NULL, NULL, NULL),
  ('korbi', NULL, 'https://github.com/korbiwong', NULL, NULL, NULL);

-- member_work (scorppu only)
INSERT OR IGNORE INTO member_work (slug, start_date, end_date, role, description) VALUES
  ('scorppu', 'Sep 2025', 'Present', 'Part-time Software Engineer at Efinix, Inc.',
   '["Continued cross-platform app development in Python and Flutter alongside core engineering team","Collaborated closely with fellow engineers to design, review, and iterate on features, gaining exposure to production-level engineering practices and code standards"]'),
  ('scorppu', 'Jun 2025', 'Aug 2025', 'Software Engineer Intern at Efinix, Inc.',
   '["Developed cross-platform Windows/Linux desktop applications using Python and Flutter","Independently designed and shipped major features that significantly improved end-user experience and workflow efficiency"]'),
  ('scorppu', 'May 2024', 'Jun 2024', 'Programming Intern at Media Explorer Limited',
   '["Aided in updating e-Commerce solution using JSP and HTML","Developed new features for clubhouse management system using SpringBoot"]');

-- member_projects (scorppu only)
INSERT OR IGNORE INTO member_projects (slug, name, description, github_url) VALUES
  ('scorppu', 'GPU Accelerated FX/FXCH (ongoing)',
   'Optimized the FXCH module in ABC (UC Berkeley''s sequential synthesis & verification system) by parallelizing subcube comparisons using CUDA, achieving significant performance gains on medium-to-large logic designs.',
   NULL),
  ('scorppu', 'BlackEye Valkyrie System (2025)',
   'Architected a lightweight web-based Clinical Management System for hospital management in remote areas, built with Spring Boot, MongoDB, Java, and JavaScript.',
   'https://github.com/Scorppu/BlackEyeValkyrieSystem_ScorppuLtd'),
  ('scorppu', 'Motion Controlled Laser Turret (2024)',
   'Engineered a gyroscope-operated laser turret on the Tiva C Launchpad with wireless controller-turret communication over Bluetooth via UART, programmed entirely in C.',
   'https://github.com/Scorppu/Motion_Controlled_Laser_Turret'),
  ('scorppu', 'Scorppu LTD Website',
   'This website!',
   'https://github.com/Scorppu/scorppu-ltd-website');

-- member_hobbies
INSERT OR IGNORE INTO member_hobbies (slug, name, description, youtube_video_id) VALUES
  ('scorppu', 'Counter-Strike',
   'Competing and grinding ranked matches — one of the games that sharpened my strategic thinking and reaction time.',
   'pxiPG_ZMFuY'),
  ('scorppu', 'Minecraft',
   'Building ambitious structures and running a private server with friends — creativity without limits.',
   'c8gX7ucFitk'),
  ('prince', 'Escape from Tarkov',
   'Spending 40 minutes in my stash, 10 minutes in queue, and get head-eyes''d 2 minutes into a raid. Repeated for 4000 hours.',
   NULL),
  ('prince', 'Counter-Strike',
   'Whiffing entire mags and baiting friends. Never give me the a4.',
   NULL);
