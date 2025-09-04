export const HEADER = {
  toggle: '☰',
  nav: [
    { label: 'Home', link: '/' },
    { label: 'Projects', link: '/projects' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' }
  ]
};

export const INTRO = {
  intro: "Hi, I'm ",
  name: "Andre Melendez",
  bio: "I'm a computer science student at the University of Texas at El Paso with a passion for software and web development. " +
  " I'm always looking for new opportunities to learn and grow. " +
  "When I'm not coding, you can find me watching anime, playing basketball, hiking, or at the gym. " +
  "Fun fact: I have a shih-tzu.",
};

export const SOCIALS = {
  socials: [
  {
    label: 'GitHub',
    link: 'https://github.com/Andre-210',
    iconClass: 'fa-brands fa-github'
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/andre-mele/',
    iconClass: 'fa-brands fa-linkedin-in'
  },
  {
    label: 'Instagram',
    link: 'https://instagram.com/andre_mele210',
    iconClass: 'fa-brands fa-instagram'
  },
  ],
  email: 'andre.melendez5835@gmail.com'
};

export const TECH_STACK = {
  title: 'My Tech Stack',
  tech: [
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg'
  },
  {
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Streamlit',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original-wordmark.svg'
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    name: 'Git/GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  {
    name: 'Google Cloud',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
  },
  {
    name: 'Jupyter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg'
  },
  {
    name: 'PyTorch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-plain.svg'
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  {
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
  },
  {
    name: 'Assembly',
    icon: 'https://www.svgrepo.com/show/373448/assembly.svg'
  }
  ]
};

export const EXPERIENCES = {
    title: 'My Work Experiences',
    experiences: [
        {
            title: 'Google',
            position: 'Software Engineering Intern | Orchestration Frameworks',
            duration: 'May 2025 - Aug 2025',
            description: "As a software engineering intern on Google's Orchestration Frameworks team, I designed and developed a tool suite to streamline debugging for Android Framework engineers. " +
            "My primary contribution involved extending Android protobuffs to capture key process metadata, a feature set to deploy on over 2 billion devices. " +
            "I also worked a Python script to decode this data into JSON and built an interactive web application using Angular, TypeScript, and D3.js to render complex process graphs. " +
            "The final tool significantly improved engineering workflows by providing clear, interactive visualizations and automating tedious manual tasks.",
            image: 'assets/Google.jpg'
        }
    ]
};

export const PROJECTS = {
    title: 'My Projects',
    projects: [
        {
            icon: 'fa-solid fa-shield-halved',
            title: 'Docker Exploit Mapper (DEM)',
            description: 'Led a team of 7 to design a web platform for penetration testers to assess and exploit Docker containers, automating vulnerability assessments to save DEVCOM analysts 40+ hours monthly.',
            technologies: 'Technologies: Docker | Trivy | Grype | Neo4j | Nmap | Metasploit | Gobuster',
            links: [
            ]
        },
        {
            icon: 'fa-solid fa-people-roof',
            title: 'ARCD | Gen AI Interior Design',
            description: 'A web app that streamlines the creative process for interior designers by generating unique interior design images using Google\'s Vertex Vision AI API and BigQuery.',
            technologies: 'Technologies: Python | Streamlit | Vertex AI | BigQuery | Google Cloud | CSS | HTML',
            links: [
                { text: 'GitHub', url: 'https://github.com/Andre-210/ARCD' }
            ]
        },
        {
            icon: 'fa-solid fa-brain',
            title: 'Shakespeare Language Learning Model',
            description: 'Developed a character-level LLM in Python using a neural network to predict the next character in a sequence, working closely with a Google engineer to implement the model.',
            technologies: 'Technologies: Python | PyTorch | Google Colab',
            links: [
            ]
        },
        {
            icon: 'fa-solid fa-chess',
            title: 'Chess Game',
            description: 'Practiced Object-Oriented Programming by developing a complete chess game where users can create, validate, and move chess pieces according to standard rules.',
            technologies: 'Technologies: Java | GitHub | Figma | Java AWT API',
            links: [
                { text: 'GitHub', url: 'https://github.com/Andre-210/chessGame' }
            ]
        }
    ]
};