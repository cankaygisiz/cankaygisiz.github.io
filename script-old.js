// Blog posts data imported from cankaygisiz.github.io
const blogPosts = [
    {
        id: 1,
        title: "About Can Kaygısız - IT Specialist & Content Creator",
        content: `
            <h3>Welcome to My Digital World!</h3>
            <p>I'm Can Kaygısız, a 24-year-old IT specialist from Northern Cyprus. My passion for computer technology started in childhood and has grown into a comprehensive skill set spanning programming, cybersecurity, and digital content creation.</p>
            
            <h3>My Background</h3>
            <p>Currently in my senior year at Eastern Mediterranean University studying Information Technology, I've developed expertise in multiple areas:</p>
            <p>• <strong>Programming Languages:</strong> C++, Java, Dart, HTML</p>
            <p>• <strong>Cybersecurity:</strong> IoT Security, Penetration Testing with Kali Linux</p>
            <p>• <strong>Database Management:</strong> MSSQL</p>
            <p>• <strong>Creative Skills:</strong> Video editing, sound production, graphic design</p>
            
            <h3>Creative Side</h3>
            <p>Beyond coding, I'm passionate about content creation. I've mastered professional tools like Premier Pro, Photoshop, and Vegas Pro by Sony. Creating and editing videos is one of my favorite activities, combining technical skills with artistic vision.</p>
            
            <h3>Philosophy</h3>
            <p>I believe in learning by doing. My approach to problem-solving involves improvisation and hands-on experience. Social connections are vital to me - I value respect, communication, and building great relationships with people I meet.</p>
            
            <p>Music is half of my lifestyle. Whether I'm listening to it or producing it, music fuels my creativity and keeps me inspired throughout my journey in technology.</p>
        `,
        date: "2025-07-07",
        category: "life",
        type: "Profile Document",
        size: "5.1 KB"
    },
    {
        id: 2,
        title: "Understanding the CIA Triad in Cybersecurity",
        content: `
            <h3>Confidentiality, Integrity and Availability (CIA) in Cyber Security</h3>
            <p>The CIA security triad model is constructed around the principles that confidentiality, integrity, and availability of information are essential to business function. This triad splits these three concepts into individual focal points, enabling security teams to address each problem with targeted approaches.</p>
            
            <h3>What is the CIA Triad and Why is it Important?</h3>
            <p>In cybersecurity, CIA refers to a vision that concentrates on the balance between confidentiality, integrity, and availability of data under your information security structure. The objective is to help institutions construct their security strategy and develop policies while serving as a foundational starting point for new use cases, products, and technologies.</p>
            
            <h3>Common Types of Attacks in Cyber Security</h3>
            <p>Understanding threats helps strengthen our CIA triad implementation:</p>
            <p>• <strong>Malware</strong> - Malicious software designed to harm systems</p>
            <p>• <strong>Denial-of-Service (DoS) Attacks</strong> - Overwhelming system resources</p>
            <p>• <strong>Phishing</strong> - Social engineering to steal credentials</p>
            <p>• <strong>Spoofing</strong> - Impersonating legitimate entities</p>
            <p>• <strong>Identity-Based Attacks</strong> - Compromising user credentials</p>
            <p>• <strong>Supply Chain Attacks</strong> - Targeting third-party vendors</p>
            <p>• <strong>IoT-Based Attacks</strong> - Exploiting connected devices</p>
            
            <h3>Cyber Security Professionals</h3>
            <p>A cybersecurity specialist is an authority in information technology security, working to protect users during software development. Their task is ensuring networks are protected from external threats like malicious hackers attempting unauthorized access.</p>
            
            <h3>Ethical and Legal Responsibilities</h3>
            <p>Computer science experts must exercise caution and respect others' right to privacy. It's unethical to take content from someone else's system and use it for personal purposes without proper authorization.</p>
        `,
        date: "2025-07-06",
        category: "security",
        type: "Security Document",
        size: "6.8 KB"
    },
    {
        id: 3,
        title: "Kali Linux and Cyber Kill Chain Model",
        content: `
            <h3>Mastering Penetration Testing with Kali Linux</h3>
            <p>Organizations can strengthen their defense against attacks by utilizing the cyber kill chain - a tool that detects and neutralizes unwanted cyber activity. Understanding this interconnected world of cyber threats helps execute defensive strategies more effectively.</p>
            
            <h3>Cyber Kill Chain Framework</h3>
            <p>The "Cyber Kill Chain" provides a succinct outline of common online attacks. With this blueprint in place, preemptive simulations and protocols can mitigate attacks more easily. These simulations are invaluable for identifying fundamental weaknesses in mission-critical infrastructure.</p>
            
            <h3>Hands-on Kali Linux Experience</h3>
            <p>During my cybersecurity studies, I gained practical experience with various Kali Linux tools:</p>
            
            <h3>Network Analysis Tools</h3>
            <p>• <strong>ifconfig</strong> - Displaying current network interface configuration</p>
            <p>• <strong>nslookup</strong> - Domain name resolution and DNS record lookup</p>
            <p>• <strong>ping</strong> - Troubleshooting connectivity and reachability</p>
            <p>• <strong>traceroute</strong> - Determining route to destination via ICMP packets</p>
            
            <h3>Vulnerability Assessment</h3>
            <p>• <strong>OpenVAS</strong> - Comprehensive vulnerability scanning</p>
            <p>• <strong>NMAP</strong> - Network discovery and security auditing</p>
            <p>• <strong>Metasploit</strong> - Penetration testing framework</p>
            
            <h3>Advanced Attack Simulations</h3>
            <p>I successfully tested various attack vectors:</p>
            <p>• <strong>Metasploitable2</strong> - Deliberately vulnerable Linux for testing</p>
            <p>• <strong>Backdoor Creation</strong> - Understanding remote access vulnerabilities</p>
            <p>• <strong>beEF-XSS</strong> - Cross-site scripting attack framework</p>
            <p>• <strong>Credential Harvesting</strong> - Monitoring target device inputs</p>
            
            <p>These hands-on experiences provided deep insights into both offensive security techniques and the importance of robust defensive measures.</p>
        `,
        date: "2025-07-05",
        category: "security",
        type: "Lab Report",
        size: "7.2 KB"
    },
    {
        id: 4,
        title: "STRIDE and DREAD Security Models",
        content: `
            <h3>Understanding Threat Modeling with STRIDE</h3>
            <p>STRIDE was initially created as part of the threat modeling process. It's a model of threats used to help reason and find threats to a system, constructed in conjunction with a model of the target system including processes, data stores, data flows, and trust boundaries.</p>
            
            <h3>STRIDE Components</h3>
            <p>Each letter represents a different type of threat:</p>
            
            <h3>S - Spoofing</h3>
            <p><strong>Property:</strong> Authenticity</p>
            <p><strong>Threat:</strong> Pretending to be something or someone other than yourself</p>
            
            <h3>T - Tampering</h3>
            <p><strong>Property:</strong> Integrity</p>
            <p><strong>Threat:</strong> Modifying something on disk, network, memory, or elsewhere</p>
            
            <h3>R - Repudiation</h3>
            <p><strong>Property:</strong> Non-repudiability</p>
            <p><strong>Threat:</strong> Claiming you didn't do something or weren't responsible (can be honest or false)</p>
            
            <h3>I - Information Disclosure</h3>
            <p><strong>Property:</strong> Confidentiality</p>
            <p><strong>Threat:</strong> Providing information to someone not authorized to access it</p>
            
            <h3>D - Denial of Service</h3>
            <p><strong>Property:</strong> Availability</p>
            <p><strong>Threat:</strong> Exhausting resources needed to provide service</p>
            
            <h3>E - Elevation of Privilege</h3>
            <p><strong>Property:</strong> Authorization</p>
            <p><strong>Threat:</strong> Allowing someone to do something they're not authorized to do</p>
            
            <h3>DREAD Risk Assessment Model</h3>
            <p>DREAD was formerly used at Microsoft for risk-assessing computer security threats. Though discontinued by 2008 due to inconsistent ratings, it provides valuable framework understanding:</p>
            
            <p>• <strong>Damage:</strong> How bad would an attack be?</p>
            <p>• <strong>Reproducibility:</strong> How easy is it to reproduce the attack?</p>
            <p>• <strong>Exploitability:</strong> How much work is required to launch the attack?</p>
            <p>• <strong>Affected Users:</strong> How many people will be impacted?</p>
            <p>• <strong>Discoverability:</strong> How easy is it to discover the threat?</p>
            
            <p>Each category receives a rating from 1-10, with the sum used to prioritize different security issues.</p>
        `,
        date: "2025-07-04",
        category: "security",
        type: "Security Framework",
        size: "5.9 KB"
    },
    {
        id: 5,
        title: "SolarWinds Breach Case Study Analysis",
        content: `
            <h3>Analyzing the SolarWinds Exploit using Cyber Kill Chain</h3>
            <p>The SolarWinds breach represents one of the most sophisticated supply chain attacks in cybersecurity history. This case study analyzes the attack using the Cyber Kill Chain framework and identifies appropriate mitigations and tools.</p>
            
            <h3>Cyber Kill Chain Analysis</h3>
            
            <h3>1. Reconnaissance</h3>
            <p><strong>Attack Vector:</strong> Gathering information about SolarWinds and its customers</p>
            <p><strong>Mitigations:</strong> Regular system updates, strict access controls</p>
            <p><strong>Tools:</strong> WHOIS databases, Shodan, Google Dorks</p>
            
            <h3>2. Weaponization</h3>
            <p><strong>Attack Vector:</strong> Developing SUNBURST malware payload</p>
            <p><strong>Mitigations:</strong> Advanced threat detection, security awareness training</p>
            <p><strong>Tools:</strong> Metasploit, VirusTotal</p>
            
            <h3>3. Delivery</h3>
            <p><strong>Attack Vector:</strong> Compromised software updates</p>
            <p><strong>Mitigations:</strong> Email filtering, endpoint protection solutions</p>
            <p><strong>Tools:</strong> Phishing simulation tools, Sandboxing tools</p>
            
            <h3>4. Exploitation</h3>
            <p><strong>Attack Vector:</strong> Executing malware on target systems</p>
            <p><strong>Mitigations:</strong> Keep systems updated, intrusion detection/prevention</p>
            <p><strong>Tools:</strong> Cobalt Strike, Nessus</p>
            
            <h3>5. Installation</h3>
            <p><strong>Attack Vector:</strong> Installing persistent backdoors</p>
            <p><strong>Mitigations:</strong> Application whitelisting, system log monitoring</p>
            <p><strong>Tools:</strong> Wireshark, Sysinternals Suite</p>
            
            <h3>6. Command and Control (C2)</h3>
            <p><strong>Attack Vector:</strong> Establishing communication with attacker servers</p>
            <p><strong>Mitigations:</strong> Network segmentation, threat intelligence feeds</p>
            <p><strong>Tools:</strong> Snort, Bro/Zeek</p>
            
            <h3>7. Actions on Objectives</h3>
            <p><strong>Attack Vector:</strong> Data exfiltration and lateral movement</p>
            <p><strong>Mitigations:</strong> User account auditing, penetration testing</p>
            <p><strong>Tools:</strong> PowerShell, Mimikatz</p>
            
            <h3>Key Takeaways</h3>
            <p>The SolarWinds incident demonstrates the critical importance of:</p>
            <p>• Supply chain security validation</p>
            <p>• Continuous monitoring and threat hunting</p>
            <p>• Defense-in-depth strategies</p>
            <p>• Proactive security measures across all kill chain phases</p>
        `,
        date: "2025-07-03",
        category: "security",
        type: "Case Study",
        size: "8.1 KB"
    },
    {
        id: 6,
        title: "My Technical Skills & Capabilities",
        content: `
            <h3>Technical Expertise Overview</h3>
            <p>As an IT specialist with diverse interests, I've developed a comprehensive skill set spanning multiple domains. Here's a breakdown of my technical capabilities:</p>
            
            <h3>Programming & Development</h3>
            <p>My programming journey includes several languages and technologies:</p>
            <p>• <strong>C++</strong> - Systems programming and performance-critical applications</p>
            <p>• <strong>Java</strong> - Object-oriented development and enterprise applications</p>
            <p>• <strong>Dart</strong> - Flutter mobile app development</p>
            <p>• <strong>HTML/CSS/JavaScript</strong> - Web development and responsive design</p>
            <p>• <strong>MSSQL</strong> - Database design and management</p>
            
            <h3>Cybersecurity & IoT</h3>
            <p>Specialized knowledge in modern security challenges:</p>
            <p>• <strong>IoT Cybersecurity</strong> - Securing connected devices and networks</p>
            <p>• <strong>Penetration Testing</strong> - Ethical hacking with Kali Linux</p>
            <p>• <strong>Vulnerability Assessment</strong> - Using tools like OpenVAS and NMAP</p>
            <p>• <strong>Threat Modeling</strong> - STRIDE and DREAD methodologies</p>
            <p>• <strong>Security Frameworks</strong> - CIA Triad, Cyber Kill Chain</p>
            
            <h3>Creative & Media Production</h3>
            <p>Combining technical skills with creative vision:</p>
            <p>• <strong>Video Editing</strong> - Premier Pro and Vegas Pro expertise</p>
            <p>• <strong>Graphic Design</strong> - Photoshop proficiency</p>
            <p>• <strong>Sound Production</strong> - Music production, mastering, and mixing</p>
            <p>• <strong>Content Creation</strong> - Clip making with eye-catching effects</p>
            
            <h3>Soft Skills & Approach</h3>
            <p>Technical skills are enhanced by strong interpersonal abilities:</p>
            <p>• <strong>Communication</strong> - Talkative and confident presenter</p>
            <p>• <strong>Problem Solving</strong> - Excellent improvisation in strict situations</p>
            <p>• <strong>Self-Learning</strong> - Autodidactic approach to mastering new tools</p>
            <p>• <strong>Social Skills</strong> - Respectful and collaborative team member</p>
            
            <h3>Current Focus</h3>
            <p>Currently completing my senior year in Information Technology at Eastern Mediterranean University, I continue expanding my expertise in emerging technologies while maintaining a balance between technical precision and creative expression.</p>
            
            <p>My diverse skill set allows me to approach problems from multiple angles, whether it's securing IoT networks, developing efficient code, or creating engaging multimedia content.</p>
        `,
        date: "2025-07-02",
        category: "tech",
        type: "Skills Portfolio",
        size: "6.4 KB"
    },
    {
        id: 7,
        title: "ITEC442 IoT and Cybersecurity Course Overview",
        content: `
            <h3>IoT and Cybersecurity Studies</h3>
            <p>This document provides a comprehensive overview of my work in ITEC442 IoT and Cybersecurity course at Eastern Mediterranean University, instructed by Beran Necat. The course covered fundamental and advanced topics in IoT security and penetration testing.</p>
            
            <h3>Course Objectives</h3>
            <p>The course aimed to provide hands-on experience with cybersecurity tools and develop understanding of:</p>
            <p>• Fundamental security principles (CIA Triad)</p>
            <p>• Threat modeling methodologies</p>
            <p>• Penetration testing techniques</p>
            <p>• Real-world attack analysis</p>
            
            <h3>Module 1: CIA Triad Fundamentals</h3>
            <p><strong>Learning Outcomes:</strong></p>
            <p>• Understanding Confidentiality, Integrity, and Availability principles</p>
            <p>• Identifying common attack vectors</p>
            <p>• Recognizing cybersecurity professional roles</p>
            <p>• Exploring research areas in computer science</p>
            <p>• Understanding ethical and legal responsibilities</p>
            
            <h3>Module 2: Kali Linux & Cyber Kill Chain</h3>
            <p><strong>Practical Skills Developed:</strong></p>
            <p>• Kali Linux installation and configuration</p>
            <p>• Network analysis with ifconfig, nslookup, ping, traceroute</p>
            <p>• Vulnerability assessment using OpenVAS</p>
            <p>• Penetration testing with Metasploit</p>
            <p>• Cross-site scripting attacks with beEF-XSS</p>
            
            <h3>Module 3: STRIDE & DREAD Models</h3>
            <p><strong>Theoretical Framework:</strong></p>
            <p>• Threat modeling with STRIDE methodology</p>
            <p>• Risk assessment using DREAD framework</p>
            <p>• Understanding spoofing, tampering, repudiation</p>
            <p>• Information disclosure and denial of service concepts</p>
            <p>• Elevation of privilege scenarios</p>
            
            <h3>Module 4: Case Study Analysis</h3>
            <p><strong>SolarWinds Breach Investigation:</strong></p>
            <p>• Cyber Kill Chain analysis of the attack</p>
            <p>• Mitigation strategies for each attack phase</p>
            <p>• Tool selection for defensive measures</p>
            <p>• Presentation of findings and solutions</p>
            
            <h3>Key Tools Mastered</h3>
            <p>Throughout the course, I gained proficiency with:</p>
            <p>• <strong>Kali Linux</strong> - Primary penetration testing platform</p>
            <p>• <strong>OpenVAS</strong> - Vulnerability scanning and assessment</p>
            <p>• <strong>Metasploit</strong> - Exploit development and testing</p>
            <p>• <strong>NMAP</strong> - Network discovery and security auditing</p>
            <p>• <strong>beEF-XSS</strong> - Browser exploitation framework</p>
            <p>• <strong>Wireshark</strong> - Network protocol analysis</p>
            
            <h3>Real-World Applications</h3>
            <p>The knowledge gained from this course directly applies to:</p>
            <p>• IoT device security assessment</p>
            <p>• Enterprise network penetration testing</p>
            <p>• Incident response and forensics</p>
            <p>• Security architecture design</p>
            <p>• Compliance and risk management</p>
            
            <p>This comprehensive course provided both theoretical understanding and practical experience essential for modern cybersecurity professionals.</p>
        `,
        date: "2025-07-01",
        category: "security",
        type: "Course Summary",
        size: "9.3 KB"
    },
    {
        id: 8,
        title: "Contact & Connect with Can Kaygısız",
        content: `
            <h3>Let's Connect!</h3>
            <p>I'm always excited to discuss technology, cybersecurity, content creation, or potential collaboration opportunities. Feel free to reach out through any of the channels below!</p>
            
            <h3>📍 Location</h3>
            <p><strong>Northern Cyprus • Nicosia</strong></p>
            <p>Currently based in the beautiful Mediterranean island of Northern Cyprus, where I'm completing my Information Technology studies.</p>
            
            <h3>📧 Email</h3>
            <p><strong>can_kaygisiz@yahoo.com</strong></p>
            <p>The best way to reach me for professional inquiries, project collaborations, or technical discussions.</p>
            
            <h3>🌐 Social Media</h3>
            <p>Follow my journey across different platforms:</p>
            <p>• <strong>Instagram:</strong> <a href="https://www.instagram.com/can_kaygisiz" target="_blank">@can_kaygisiz</a> - Behind-the-scenes content and life updates</p>
            <p>• <strong>Twitter:</strong> <a href="https://twitter.com/CanKaygisiz9" target="_blank">@CanKaygisiz9</a> - Tech thoughts and industry insights</p>
            <p>• <strong>Facebook:</strong> <a href="https://www.facebook.com/cankaygisiz8/" target="_blank">Can Kaygısız</a> - Professional updates and networking</p>
            <p>• <strong>GitHub:</strong> <a href="https://github.com/cankaygisiz" target="_blank">cankaygisiz</a> - Code repositories and projects</p>
            
            <h3>💼 What I'm Looking For</h3>
            <p>I'm particularly interested in opportunities involving:</p>
            <p>• <strong>Cybersecurity Roles</strong> - Penetration testing, security analysis, IoT security</p>
            <p>• <strong>Software Development</strong> - Full-stack development, mobile apps with Flutter/Dart</p>
            <p>• <strong>Content Creation</strong> - Video editing, technical content, educational materials</p>
            <p>• <strong>Consulting</strong> - IT security assessments, technology consulting</p>
            
            <h3>🎯 Current Projects</h3>
            <p>Right now I'm focused on:</p>
            <p>• Completing my IT degree at Eastern Mediterranean University</p>
            <p>• Expanding my cybersecurity certification portfolio</p>
            <p>• Creating educational content about IoT security</p>
            <p>• Developing mobile applications with Flutter</p>
            
            <h3>� Download My Resume</h3>
            <p>Want to see my complete professional background? <button class="download-resume-btn" onclick="downloadResume()">📥 Download Resume (PDF)</button></p>
            
            <h3>�💡 Let's Collaborate!</h3>
            <p>Whether you're interested in discussing the latest cybersecurity trends, need help with a technical project, or want to explore creative content collaborations, I'd love to hear from you!</p>
            
            <p>Feel free to reach out via email or connect with me on social media. I typically respond within 24-48 hours and am always open to new opportunities and interesting conversations.</p>
        `,
        date: "2025-07-07",
        category: "life",
        type: "Contact Info",
        size: "4.7 KB"
    },
    {
        id: 9,
        title: "My Projects Portfolio",
        content: `
            <h3>Featured Projects & Repositories</h3>
            <p>Here's a showcase of my technical projects, ranging from cybersecurity tools to web applications and mobile apps. Each project demonstrates different aspects of my technical expertise.</p>
            
            <h3>🔒 Cybersecurity Projects</h3>
            
            <h3>IoT Security Assessment Tool</h3>
            <p><strong>Technologies:</strong> Python, Nmap, Kali Linux</p>
            <p><strong>Description:</strong> Automated vulnerability scanner specifically designed for IoT devices. Features network discovery, port scanning, and common IoT vulnerability detection.</p>
            <p><strong>Key Features:</strong></p>
            <p>• Automated device discovery on network segments</p>
            <p>• Custom vulnerability database for IoT devices</p>
            <p>• Report generation with remediation suggestions</p>
            <p>• Integration with OpenVAS for comprehensive scanning</p>
            <p><a href="https://github.com/cankaygisiz/iot-security-scanner" target="_blank">🔗 View on GitHub</a> | <button class="demo-btn" onclick="showDemo('iot-scanner')">🎥 View Demo</button></p>
            
            <h3>Network Penetration Testing Framework</h3>
            <p><strong>Technologies:</strong> Python, Metasploit, Wireshark</p>
            <p><strong>Description:</strong> Custom framework built during ITEC442 course for streamlined penetration testing workflows.</p>
            <p><strong>Key Features:</strong></p>
            <p>• Automated reconnaissance phase</p>
            <p>• Custom exploit modules</p>
            <p>• Comprehensive reporting system</p>
            <p>• Integration with Cyber Kill Chain methodology</p>
            <p><a href="https://github.com/cankaygisiz/pentest-framework" target="_blank">🔗 View on GitHub</a></p>
            
            <h3>💻 Web Development Projects</h3>
            
            <h3>Retro Portfolio Website (This Site!)</h3>
            <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript, Responsive Design</p>
            <p><strong>Description:</strong> A unique portfolio website featuring a Windows 2000s file explorer theme with modern responsive design.</p>
            <p><strong>Key Features:</strong></p>
            <p>• Authentic Windows XP aesthetic with modern functionality</p>
            <p>• Full mobile responsiveness</p>
            <p>• Dark mode toggle</p>
            <p>• Search functionality</p>
            <p>• Smooth animations and transitions</p>
            <p><a href="https://github.com/cankaygisiz/retro-portfolio" target="_blank">🔗 View Source Code</a></p>
            
            <h3>University Course Management System</h3>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript, MSSQL</p>
            <p><strong>Description:</strong> Web application for managing course enrollments and student information at EMU.</p>
            <p><strong>Key Features:</strong></p>
            <p>• Student registration and course selection</p>
            <p>• Real-time grade tracking</p>
            <p>• Professor dashboard for course management</p>
            <p>• Responsive design for mobile access</p>
            <p><a href="https://github.com/cankaygisiz/course-management" target="_blank">🔗 View on GitHub</a></p>
            
            <h3>📱 Mobile App Development</h3>
            
            <h3>CyberSafe - IoT Device Monitor</h3>
            <p><strong>Technologies:</strong> Flutter, Dart, Firebase</p>
            <p><strong>Description:</strong> Mobile application for monitoring IoT device security status in real-time.</p>
            <p><strong>Key Features:</strong></p>
            <p>• Real-time device status monitoring</p>
            <p>• Security alert notifications</p>
            <p>• Device vulnerability assessment</p>
            <p>• Cross-platform compatibility (iOS/Android)</p>
            <p><a href="https://github.com/cankaygisiz/cybersafe-app" target="_blank">🔗 View on GitHub</a> | <button class="demo-btn" onclick="showDemo('cybersafe')">📱 View App Demo</button></p>
            
            <h3>🎬 Content Creation Projects</h3>
            
            <h3>Cybersecurity Education Series</h3>
            <p><strong>Technologies:</strong> Adobe Premiere Pro, After Effects, Photoshop</p>
            <p><strong>Description:</strong> Educational video series covering cybersecurity fundamentals for beginners.</p>
            <p><strong>Content Includes:</strong></p>
            <p>• Introduction to Ethical Hacking</p>
            <p>• IoT Security Best Practices</p>
            <p>• Kali Linux Tutorial Series</p>
            <p>• STRIDE Threat Modeling Explained</p>
            <p><a href="https://www.youtube.com/playlist?list=cybersecurity-basics" target="_blank">🎥 Watch Series</a></p>
            
            <h3>🎵 Music Production</h3>
            
            <h3>Tech-Inspired Electronic Music</h3>
            <p><strong>Tools:</strong> FL Studio, Ableton Live</p>
            <p><strong>Description:</strong> Original electronic music compositions inspired by technology and coding.</p>
            <p><strong>Notable Tracks:</strong></p>
            <p>• "Digital Fortress" - Cybersecurity-themed ambient track</p>
            <p>• "Code Compilation" - Upbeat electronic with programming sound samples</p>
            <p>• "IoT Symphony" - Futuristic soundscape representing connected devices</p>
            <p><a href="https://soundcloud.com/cankaygisiz" target="_blank">🎵 Listen on SoundCloud</a></p>
            
            <h3>🔧 Tools & Utilities</h3>
            
            <h3>Network Configuration Backup Tool</h3>
            <p><strong>Technologies:</strong> Python, SSH, JSON</p>
            <p><strong>Description:</strong> Automated tool for backing up network device configurations.</p>
            <p><a href="https://github.com/cankaygisiz/network-backup-tool" target="_blank">🔗 View on GitHub</a></p>
            
            <h3>Security Log Analyzer</h3>
            <p><strong>Technologies:</strong> Python, RegEx, Data Visualization</p>
            <p><strong>Description:</strong> Tool for analyzing security logs and identifying potential threats.</p>
            <p><a href="https://github.com/cankaygisiz/security-log-analyzer" target="_blank">🔗 View on GitHub</a></p>
            
            <p><em>Want to collaborate on a project or learn more about any of these? Feel free to reach out!</em></p>
        `,
        date: "2025-07-07",
        category: "tech",
        type: "Project Portfolio",
        size: "8.9 KB"
    }
];

// DOM elements
let currentCategory = 'all';
let currentPost = null;
let isMobileMenuOpen = false;
let searchQuery = '';

// Desktop wallpaper functionality
let desktopMode = true;
let doubleClickTimer = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    if (desktopMode) {
        initializeDesktop();
    } else {
        initializeApp();
    }
});

function initializeDesktop() {
    updateDesktopTime();
    setInterval(updateDesktopTime, 1000);
    
    setupDesktopEventListeners();
}

function updateDesktopTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const desktopTimeElement = document.getElementById('desktop-time');
    if (desktopTimeElement) {
        desktopTimeElement.textContent = timeString;
    }
}

function openPortfolio() {
    const portfolioFolder = document.getElementById('portfolio-folder');
    const desktopWallpaper = document.getElementById('desktop-wallpaper');
    const mainDesktop = document.getElementById('main-desktop');
    
    // Add double-click animation
    portfolioFolder.classList.add('double-clicked');
    
    // Show opening message
    showTransitionMessage();
    
    setTimeout(() => {
        portfolioFolder.classList.remove('double-clicked');
        
        // Start transition
        desktopWallpaper.classList.add('fade-out');
        
        setTimeout(() => {
            desktopWallpaper.style.display = 'none';
            mainDesktop.style.display = 'block';
            mainDesktop.classList.add('fade-in');
            
            // Clean up any existing state
            closeContextMenu();
            
            // Initialize the main application
            desktopMode = false;
            initializeApp();
            
        }, 800);
    }, 300);
}

function showTransitionMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.9);
        color: #00ff00;
        padding: 12px 20px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 12px;
        z-index: 200;
        border: 1px solid #00ff00;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    message.textContent = 'Loading Can\'s Portfolio...';
    
    document.querySelector('.desktop-wallpaper').appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '1';
    }, 50);
    
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 300);
    }, 1000);
}

function initializeApp() {
    updateTime();
    setInterval(updateTime, 1000);
    
    // Clear any existing event listeners first
    clearEventListeners();
    
    setupEventListeners();
    renderFileList();
    updateStatusBar();
    
    // Initialize enhanced features only once
    enhanceKeyboardNavigation();
    initializeAnalytics();
    
    // Add right-click context menu to file items with event delegation
    document.removeEventListener('contextmenu', handleContextMenu);
    document.addEventListener('contextmenu', handleContextMenu);
}

// Function to clear existing event listeners
function clearEventListeners() {
    // Remove existing mobile menu listeners
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.replaceWith(mobileMenuToggle.cloneNode(true));
    }
    
    // Remove existing theme toggle listeners
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.replaceWith(themeToggle.cloneNode(true));
    }
    
    // Remove existing window control listeners
    const windowControls = document.querySelectorAll('.window-control');
    windowControls.forEach(control => {
        control.replaceWith(control.cloneNode(true));
    });
}

// Separate context menu handler for better cleanup
function handleContextMenu(e) {
    const fileItem = e.target.closest('.file-item');
    if (fileItem && !desktopMode) {
        showContextMenu(e, fileItem.dataset.postId);
    }
}

function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuToggle && sidebar) {
        // Remove any existing listeners first
        mobileMenuToggle.onclick = null;
        
        // Add click event listener
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            isMobileMenuOpen = !isMobileMenuOpen;
            sidebar.classList.toggle('open', isMobileMenuOpen);
            
            // Animate hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            
            if (isMobileMenuOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Add touch event for mobile devices
        mobileMenuToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        });
        
        // Make sure it's visible in mobile view
        mobileMenuToggle.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
    }

    // Folder navigation
    const folderItems = document.querySelectorAll('.folder-item');
    folderItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove selected class from all folders
            folderItems.forEach(f => f.classList.remove('selected'));
            // Add selected class to clicked folder
            this.classList.add('selected');
            
            // Update current category
            currentCategory = this.dataset.category;
            
            // Close mobile menu if open
            if (isMobileMenuOpen && window.innerWidth <= 768 && sidebar) {
                isMobileMenuOpen = false;
                sidebar.classList.remove('open');
                if (mobileMenuToggle) {
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
            
            // Render file list for selected category
            renderFileList();
            showFileList();
        });
    });

    // Back button
    const backButton = document.getElementById('back-btn');
    if (backButton) {
        backButton.addEventListener('click', showFileList);
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput && searchBtn) {
        function performSearch() {
            searchQuery = searchInput.value.toLowerCase().trim();
            renderFileList();
            const statusText = document.getElementById('status-text');
            if (statusText && searchQuery) {
                statusText.textContent = `Search: "${searchQuery}"`;
            }
        }
        
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        searchInput.addEventListener('input', function() {
            if (this.value === '') {
                searchQuery = '';
                renderFileList();
                const statusText = document.getElementById('status-text');
                if (statusText) {
                    statusText.textContent = 'Ready';
                }
            }
        });
    }

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            
            this.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
            
            // Save preference
            localStorage.setItem('darkMode', isDark);
        });
        
        // Load saved theme preference
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme === 'true') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️ Light Mode';
        }
    }

    // Window controls
    const windowControls = document.querySelectorAll('.window-control');
    
    windowControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.classList.contains('minimize')) {
                // Minimize animation (visual feedback only)
                this.style.background = '#c0c0c0';
                setTimeout(() => {
                    this.style.background = '';
                }, 100);
                
            } else if (this.classList.contains('maximize')) {
                // Maximize toggle with animation
                const windowElement = document.querySelector('.window');
                
                if (windowElement) {
                    const isMaximized = windowElement.classList.contains('maximized');
                    
                    // Add transition for smooth animation
                    windowElement.style.transition = 'all 0.3s ease';
                    
                    if (isMaximized) {
                        // Restore to normal size
                        windowElement.classList.remove('maximized');
                        windowElement.style.top = '20px';
                        windowElement.style.left = '20px';
                        windowElement.style.right = '20px';
                        windowElement.style.bottom = '60px';
                        windowElement.style.width = '';
                        windowElement.style.height = '';
                        this.textContent = '□';
                    } else {
                        // Maximize to full screen
                        windowElement.classList.add('maximized');
                        windowElement.style.top = '0px';
                        windowElement.style.left = '0px';
                        windowElement.style.right = '0px';
                        windowElement.style.bottom = '40px';
                        windowElement.style.width = '100vw';
                        windowElement.style.height = 'calc(100vh - 40px)';
                        this.textContent = '❐';
                    }
                    
                    // Remove transition after animation
                    setTimeout(() => {
                        windowElement.style.transition = '';
                    }, 300);
                }
                
            } else if (this.classList.contains('close')) {
                // Close button - return to desktop
                returnToDesktop();
            }
        });
    });
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

function renderFileList() {
    const fileListContent = document.getElementById('file-list');
    if (!fileListContent) return; // Exit if element doesn't exist
    
    let filteredPosts = currentCategory === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === currentCategory);
    
    // Apply search filter if search query exists
    if (searchQuery) {
        filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(searchQuery) || 
            post.content.toLowerCase().includes(searchQuery) ||
            post.type.toLowerCase().includes(searchQuery)
        );
    }

    fileListContent.innerHTML = '';

    filteredPosts.forEach(post => {
        const fileItem = createFileItem(post);
        fileListContent.appendChild(fileItem);
    });

    updateStatusBar();
}

function createFileItem(post) {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.dataset.postId = post.id;

    fileItem.innerHTML = `
        <div class="file-cell name">
            <span class="file-icon">${getFileIcon(post.type)}</span>
            <span class="file-name">${post.title}</span>
        </div>
        <div class="file-cell date">${formatDate(post.date)}</div>
        <div class="file-cell type">${post.type}</div>
        <div class="file-cell size">${post.size}</div>
    `;

    fileItem.addEventListener('click', function() {
        // Remove selected class from all file items
        document.querySelectorAll('.file-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        // Add selected class to clicked item
        this.classList.add('selected');
        
        // Update status
        document.getElementById('status-text').textContent = `Selected: ${post.title}`;
    });

    fileItem.addEventListener('dblclick', function() {
        openBlogPost(post);
    });

    return fileItem;
}

function getFileIcon(type) {
    const icons = {
        'HTML Document': '🌐',
        'Text Document': '📄',
        'Rich Text Document': '📝',
        'Code Document': '💾',
        'Profile Document': '👤',
        'Security Document': '🔒',
        'Lab Report': '🧪',
        'Security Framework': '🛡️',
        'Case Study': '📊',
        'Skills Portfolio': '💼',
        'Course Summary': '🎓',
        'Contact Info': '📞',
        'Project Portfolio': '🚀'
    };
    return icons[type] || '📄';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
}

function openBlogPost(post) {
    currentPost = post;
    
    // Track post view
    trackPostView(post.id);
    
    // Populate post content
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = formatDate(post.date);
    document.getElementById('post-category').textContent = getCategoryName(post.category);
    document.getElementById('post-text').innerHTML = post.content;
    
    // Update address bar
    document.querySelector('.address-input').value = `C:\\Users\\Can\\Portfolio\\${getCategoryName(post.category)}\\${post.title}`;
    
    // Add smooth transition
    const fileList = document.querySelector('.file-list');
    const contentHeader = document.querySelector('.content-header');
    const blogContent = document.getElementById('blog-content');
    
    // Fade out file list
    fileList.style.opacity = '0';
    contentHeader.style.opacity = '0';
    
    setTimeout(() => {
        fileList.style.display = 'none';
        contentHeader.style.display = 'none';
        blogContent.style.display = 'block';
        blogContent.classList.add('slide-in-right');
        
        // Fade in blog content
        setTimeout(() => {
            blogContent.style.opacity = '1';
        }, 50);
    }, 200);
    
    // Update status
    document.getElementById('status-text').textContent = `Reading: ${post.title}`;
}

function showFileList() {
    const blogContent = document.getElementById('blog-content');
    const fileList = document.querySelector('.file-list');
    const contentHeader = document.querySelector('.content-header');
    
    // Fade out blog content
    blogContent.style.opacity = '0';
    
    setTimeout(() => {
        // Hide blog post content
        blogContent.style.display = 'none';
        blogContent.classList.remove('slide-in-right');
        
        // Show file list with animation
        fileList.style.display = 'flex';
        contentHeader.style.display = 'block';
        fileList.classList.add('slide-in-left');
        
        // Fade in
        setTimeout(() => {
            fileList.style.opacity = '1';
            contentHeader.style.opacity = '1';
        }, 50);
    }, 200);
    
    // Reset address bar
    document.querySelector('.address-input').value = 'C:\\Users\\Can\\Portfolio';
    
    // Update status
    document.getElementById('status-text').textContent = 'Ready';
    
    currentPost = null;
}

function getCategoryName(category) {
    const categoryNames = {
        'tech': 'Technology',
        'security': 'Cybersecurity',
        'life': 'Life',
        'travel': 'Travel',
        'code': 'Code',
        'all': 'All Posts'
    };
    return categoryNames[category] || category;
}

function updateStatusBar() {
    let filteredPosts = currentCategory === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === currentCategory);
    
    // Apply search filter if search query exists
    if (searchQuery) {
        filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(searchQuery) || 
            post.content.toLowerCase().includes(searchQuery) ||
            post.type.toLowerCase().includes(searchQuery)
        );
    }
    
    const fileCount = document.getElementById('file-count');
    if (fileCount) {
        const count = filteredPosts.length;
        fileCount.textContent = `${count} object${count !== 1 ? 's' : ''}`;
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    
    if (window.innerWidth > 768 && isMobileMenuOpen) {
        isMobileMenuOpen = false;
        const sidebar = document.querySelector('.sidebar');
        
        if (sidebar) {
            sidebar.classList.remove('open');
        }
        
        if (mobileMenuToggle) {
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
    
    // Ensure mobile menu button visibility
    if (mobileMenuToggle) {
        mobileMenuToggle.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Don't run global shortcuts in desktop mode
    if (desktopMode) return;
    
    // ESC key to go back to file list
    if (e.key === 'Escape' && currentPost) {
        showFileList();
    }
    
    // Ctrl/Cmd + Home to go to all posts
    if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
        e.preventDefault();
        const allPostsFolder = document.querySelector('.folder-item[data-category="all"]');
        if (allPostsFolder) {
            allPostsFolder.click();
        }
    }
});

// Add some startup flair
window.addEventListener('load', function() {
    // Only run startup animation if we're not in desktop mode
    if (!desktopMode) {
        const window = document.querySelector('.window');
        if (window) {
            // Simulate startup delay
            setTimeout(() => {
                window.style.opacity = '0';
                window.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    window.style.transition = 'all 0.3s ease';
                    window.style.opacity = '1';
                    window.style.transform = 'scale(1)';
                }, 100);
            }, 200);
        }
    }
});

// Resume download function
function downloadResume() {
    // Create a simple PDF-like content
    const resumeContent = `
Can Kaygısız - IT Specialist & Cybersecurity Expert

CONTACT INFORMATION
Email: can_kaygisiz@yahoo.com
Location: Northern Cyprus, Nicosia
GitHub: github.com/cankaygisiz
LinkedIn: linkedin.com/in/cankaygisiz

EDUCATION
Eastern Mediterranean University
Bachelor of Information Technology (Senior Year)
Specialization: Cybersecurity & IoT Security

TECHNICAL SKILLS
Programming: C++, Java, Dart, HTML/CSS/JavaScript, SQL
Security Tools: Kali Linux, Metasploit, OpenVAS, Nmap, Wireshark
Creative Software: Adobe Premiere Pro, Photoshop, Vegas Pro
Databases: MSSQL

EXPERIENCE
- Completed ITEC442 IoT and Cybersecurity course
- Hands-on penetration testing with various tools
- Content creation and video editing projects
- Music production and sound engineering

PROJECTS
- IoT Security Assessment Tool
- Network Penetration Testing Framework
- Retro Portfolio Website
- CyberSafe Mobile App

CERTIFICATIONS & ACHIEVEMENTS
- Cyber Kill Chain Analysis Expert
- STRIDE & DREAD Threat Modeling
- Advanced Kali Linux Usage
- Cross-site Scripting (XSS) Assessment

LANGUAGES
English (Fluent)
Turkish (Native)
    `;
    
    // Create and download the resume
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Can_Kaygisiz_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show notification
    showNotification('Resume downloaded successfully! 📄');
}

// Demo function
function showDemo(projectType) {
    const demoContent = {
        'iot-scanner': {
            title: 'IoT Security Scanner Demo',
            content: `
                <h3>IoT Security Assessment Tool</h3>
                <p>This tool automatically scans network segments for IoT devices and assesses their security posture.</p>
                <h4>Demo Features:</h4>
                <ul>
                    <li>Network device discovery</li>
                    <li>Port scanning and service detection</li>
                    <li>Vulnerability assessment</li>
                    <li>Report generation</li>
                </ul>
                <p><strong>Sample Output:</strong></p>
                <pre style="background: #f0f0f0; padding: 10px; font-family: monospace;">
[+] Scanning network 192.168.1.0/24...
[+] Found IoT device: Smart Camera (192.168.1.100)
[!] Vulnerability detected: Default credentials
[!] Open ports: 22, 80, 8080
[+] Generating security report...
[+] Scan complete. 5 devices found, 3 vulnerabilities detected.
                </pre>
                <p>This is a demonstration of the tool's capabilities. The actual tool includes comprehensive reporting and remediation suggestions.</p>
            `
        },
        'cybersafe': {
            title: 'CyberSafe Mobile App Demo',
            content: `
                <h3>CyberSafe - IoT Device Monitor</h3>
                <p>A Flutter-based mobile application for real-time IoT security monitoring.</p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Real-time device status dashboard</li>
                    <li>Security alert notifications</li>
                    <li>Vulnerability timeline tracking</li>
                    <li>Device configuration recommendations</li>
                </ul>
                <div style="background: #e0e0e0; padding: 15px; margin: 10px 0;">
                    <h4>App Screenshots (Mockup):</h4>
                    <p>📱 <strong>Dashboard:</strong> Shows all connected IoT devices with security status indicators</p>
                    <p>🔔 <strong>Alerts:</strong> Real-time notifications for security events</p>
                    <p>📊 <strong>Analytics:</strong> Security trends and vulnerability reports</p>
                    <p>⚙️ <strong>Settings:</strong> Device configuration and monitoring preferences</p>
                </div>
                <p>Built with Flutter/Dart for cross-platform compatibility and Firebase for real-time data synchronization.</p>
            `
        }
    };
    
    const demo = demoContent[projectType];
    if (demo) {
        createModal(demo.title, demo.content);
    }
}

// Modal creation function
function createModal(title, content) {
    // Remove existing modal if present
    const existingModal = document.querySelector('.demo-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="demo-content">
            <button class="demo-close" onclick="closeModal()">&times;</button>
            <h2>${title}</h2>
            <div>${content}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close modal function
function closeModal() {
    const modal = document.querySelector('.demo-modal');
    if (modal) {
        modal.remove();
    }
}

// Show notification function
function showNotification(message) {
    // Remove any existing notifications to prevent stacking
    const existingNotifications = document.querySelectorAll('.copy-notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Share functionality
function sharePost(postTitle, postUrl) {
    if (navigator.share) {
        navigator.share({
            title: postTitle,
            url: postUrl
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(postUrl).then(() => {
            showNotification('Link copied to clipboard! 📋');
        });
    }
}

// Right-click context menu
let contextMenu = null;

function showContextMenu(e, postId) {
    e.preventDefault();
    
    // Remove existing context menu
    if (contextMenu) {
        contextMenu.remove();
    }
    
    const post = blogPosts.find(p => p.id == postId);
    if (!post) return;
    
    contextMenu = document.createElement('div');
    contextMenu.className = 'context-menu';
    contextMenu.style.left = e.pageX + 'px';
    contextMenu.style.top = e.pageY + 'px';
    contextMenu.style.display = 'block';
    
    // Create menu items with proper event listeners
    const openItem = document.createElement('div');
    openItem.className = 'context-menu-item';
    openItem.innerHTML = '📖 Open';
    openItem.addEventListener('click', () => {
        openBlogPost(post);
        closeContextMenu();
    });
    
    const shareItem = document.createElement('div');
    shareItem.className = 'context-menu-item';
    shareItem.innerHTML = '📤 Share';
    shareItem.addEventListener('click', () => {
        sharePost(post.title, window.location.href);
        closeContextMenu();
    });
    
    const copyItem = document.createElement('div');
    copyItem.className = 'context-menu-item';
    copyItem.innerHTML = '📋 Copy Link';
    copyItem.addEventListener('click', () => {
        copyPostLink(post.title);
        closeContextMenu();
    });
    
    const favItem = document.createElement('div');
    favItem.className = 'context-menu-item disabled';
    favItem.innerHTML = '📁 Add to Favorites';
    
    contextMenu.appendChild(openItem);
    contextMenu.appendChild(shareItem);
    contextMenu.appendChild(copyItem);
    contextMenu.appendChild(favItem);
    
    document.body.appendChild(contextMenu);
    
    // Close context menu on click outside
    setTimeout(() => {
        document.addEventListener('click', closeContextMenu);
    }, 100);
}

function closeContextMenu() {
    if (contextMenu) {
        contextMenu.remove();
        contextMenu = null;
    }
    document.removeEventListener('click', closeContextMenu);
}

function copyPostLink(postTitle) {
    const link = `${window.location.href}#${postTitle.replace(/\s+/g, '-').toLowerCase()}`;
    navigator.clipboard.writeText(link).then(() => {
        showNotification('Post link copied! 🔗');
    });
    closeContextMenu();
}

// Share current post functions
function shareCurrentPost() {
    if (currentPost) {
        sharePost(currentPost.title, window.location.href);
    }
}

function printPost() {
    if (currentPost) {
        const printContent = `
            <html>
            <head>
                <title>${currentPost.title}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #000080; }
                    h3 { color: #000080; margin-top: 20px; }
                    p { line-height: 1.6; margin-bottom: 10px; }
                    .meta { color: #666; font-size: 14px; margin-bottom: 20px; }
                </style>
            </head>
            <body>
                <h1>${currentPost.title}</h1>
                <div class="meta">
                    Date: ${formatDate(currentPost.date)} | 
                    Category: ${getCategoryName(currentPost.category)} | 
                    Type: ${currentPost.type}
                </div>
                ${currentPost.content}
                <hr>
                <p><em>Printed from Can Kaygısız's Portfolio - ${window.location.href}</em></p>
            </body>
            </html>
        `;
        
        const printWindow = window.open('', '_blank');
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
    }
}

function copyCurrentPostLink() {
    if (currentPost) {
        const link = `${window.location.href}#${currentPost.title.replace(/\s+/g, '-').toLowerCase()}`;
        navigator.clipboard.writeText(link).then(() => {
            showNotification('Post link copied! 🔗');
        });
    }
}

// Enhanced keyboard navigation
let keyboardNavigationInitialized = false;
let currentFileIndex = -1;

function enhanceKeyboardNavigation() {
    // Prevent duplicate initialization
    if (keyboardNavigationInitialized) return;
    keyboardNavigationInitialized = true;
    
    function handleKeyDown(e) {
        // Don't interfere with search input or if we're in desktop mode
        if (e.target.classList.contains('search-input') || desktopMode) return;
        
        // Get current file items (dynamic)
        const fileItems = document.querySelectorAll('.file-item');
        if (fileItems.length === 0) return;
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentFileIndex = Math.min(currentFileIndex + 1, fileItems.length - 1);
                highlightFile(currentFileIndex);
                break;
            case 'ArrowUp':
                e.preventDefault();
                currentFileIndex = Math.max(currentFileIndex - 1, 0);
                highlightFile(currentFileIndex);
                break;
            case 'Enter':
                if (currentFileIndex >= 0 && fileItems[currentFileIndex]) {
                    const postId = fileItems[currentFileIndex].dataset.postId;
                    const post = blogPosts.find(p => p.id == postId);
                    if (post) openBlogPost(post);
                }
                break;
            case 'F5':
                e.preventDefault();
                renderFileList();
                showNotification('File list refreshed! 🔄');
                break;
        }
    }
    
    document.addEventListener('keydown', handleKeyDown);
}

function highlightFile(index) {
    const fileItems = document.querySelectorAll('.file-item');
    fileItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('selected');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('selected');
        }
    });
}

// Enhanced features initialization - moved to initializeApp function

// Simple analytics and visitor tracking
function initializeAnalytics() {
    // Track page views
    let pageViews = localStorage.getItem('pageViews') || 0;
    pageViews = parseInt(pageViews) + 1;
    localStorage.setItem('pageViews', pageViews);
    
    // Track unique visitor (simple approach)
    if (!localStorage.getItem('visitorId')) {
        localStorage.setItem('visitorId', Date.now().toString());
        localStorage.setItem('firstVisit', new Date().toISOString());
    }
    
    // Track popular posts
    let postViews = JSON.parse(localStorage.getItem('postViews') || '{}');
    
    // Update status bar with visitor info
    setTimeout(() => {
        const statusText = document.getElementById('status-text');
        if (statusText) {
            const originalText = statusText.textContent;
            statusText.textContent = `Welcome back! Visit #${pageViews}`;
            
            setTimeout(() => {
                if (statusText) {
                    statusText.textContent = originalText;
                }
            }, 3000);
        }
    }, 2000);
}

// Track post views
function trackPostView(postId) {
    let postViews = JSON.parse(localStorage.getItem('postViews') || '{}');
    postViews[postId] = (postViews[postId] || 0) + 1;
    localStorage.setItem('postViews', JSON.stringify(postViews));
}

// Get analytics data
function getAnalytics() {
    return {
        pageViews: localStorage.getItem('pageViews') || 0,
        firstVisit: localStorage.getItem('firstVisit'),
        postViews: JSON.parse(localStorage.getItem('postViews') || '{}'),
        visitorId: localStorage.getItem('visitorId')
    };
}

function setupDesktopEventListeners() {
    const portfolioFolder = document.getElementById('portfolio-folder');
    
    portfolioFolder.addEventListener('dblclick', function(e) {
        e.preventDefault();
        openPortfolio();
    });
    
    portfolioFolder.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.desktop-icon').forEach(icon => {
            icon.classList.remove('selected');
        });
        this.classList.add('selected');
        
        if (doubleClickTimer) {
            clearTimeout(doubleClickTimer);
            doubleClickTimer = null;
            openPortfolio();
        } else {
            doubleClickTimer = setTimeout(() => {
                doubleClickTimer = null;
            }, 300);
        }
    });
}

function returnToDesktop() {
    const desktopWallpaper = document.getElementById('desktop-wallpaper');
    const mainDesktop = document.getElementById('main-desktop');
    
    if (desktopWallpaper && mainDesktop) {
        // Clean up any open modals or context menus
        closeContextMenu();
        closeModal();
        
        // Reset mobile menu state
        isMobileMenuOpen = false;
        const sidebar = document.querySelector('.sidebar');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        
        if (sidebar) {
            sidebar.classList.remove('open');
        }
        
        if (mobileMenuToggle) {
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        
        // Reset window state
        const windowElement = document.querySelector('.window');
        if (windowElement) {
            windowElement.classList.remove('maximized');
            windowElement.style.transition = '';
            windowElement.style.top = '';
            windowElement.style.left = '';
            windowElement.style.right = '';
            windowElement.style.bottom = '';
        }
        
        // Show transition message
        showCloseMessage();
        
        // Animate back to desktop
        setTimeout(() => {
            mainDesktop.classList.add('fade-out');
            
            setTimeout(() => {
                mainDesktop.style.display = 'none';
                mainDesktop.classList.remove('fade-out', 'fade-in');
                
                desktopWallpaper.style.display = 'flex';
                desktopWallpaper.classList.remove('fade-out');
                desktopWallpaper.classList.add('fade-in-from-app');
                
                // Switch back to desktop mode
                desktopMode = true;
                
                // Re-initialize desktop
                initializeDesktop();
                
            }, 600);
        }, 500);
    }
}

function showCloseMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: #00ff00;
        padding: 15px 25px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 14px;
        z-index: 9999;
        border: 1px solid #00ff00;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    message.textContent = 'Closing Portfolio...';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '1';
    }, 50);
    
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 300);
    }, 1200);
}

// ...existing code...