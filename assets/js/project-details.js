// Project details data from CV
const projectData = {
    project1: {
        title: "AI Solutions for Smart Driving Cars",
        date: "November 2023 - Present",
        role: "AI Engineer / Team Lead",
        challenge: `
            <ul>
                <li>Real-time collision risk detection and prevention through advanced computer vision</li>
                <li>Automated visual data processing and annotation for large-scale video datasets</li>
                <li>Privacy-compliant video processing ensuring GDPR compliance for sensitive data</li>
                <li>Edge computing deployment for real-time inference constraints</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Collision Prediction System:</strong> Implemented YOLOv8 and YOLOPv2 models for simultaneous detection of vehicles, pedestrians, and lane markings with DeepSORT tracking</li>
                <li><strong>Trajectory Prediction:</strong> Created Kalman filter-based motion prediction system forecasting object movements up to 3 seconds ahead with 75% accuracy</li>
                <li><strong>Auto-labeling Application:</strong> Built scalable application using FastAPI, RabbitMQ, and Celery. Implemented active learning achieving 86% reduction in manual annotation effort</li>
                <li><strong>Continuous Learning Pipeline:</strong> Designed automated pipeline for model improvement with LoRA-based retraining, reducing training time by 50%</li>
                <li><strong>Privacy-Preserving CV:</strong> Developed YOLO-based face and license plate detection with 89% accuracy in anonymization</li>
                <li><strong>Edge Computing Optimization:</strong> Implemented efficient memory pooling and multi-threaded processing pipeline</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Detection Accuracy:</strong> mAP@0.5 of 0.92 for vehicle detection, 0.88 for pedestrian detection</li>
                <li><strong>Inference Speed:</strong> 80ms end-to-end latency on Jetson Orin (12.5 FPS)</li>
                <li><strong>Collision Prediction:</strong> 85% accuracy with 95% precision and 78% recall</li>
                <li><strong>Privacy Protection:</strong> 89% accuracy in face detection with 99.2% blur coverage</li>
                <li><strong>Annotation Efficiency:</strong> 86% reduction in manual labeling time</li>
            </ul>
        `,
        technologies: ["PyTorch", "OpenCV", "YOLOv8", "BLIP-2", "Llama", "DeepSORT", "Kalman Filter", "Jetson Orin", "FastAPI", "RabbitMQ", "Celery", "Redis"]
    },
    project2: {
        title: "NLP on Call Center Services",
        date: "August 2022 - January 2023",
        role: "MLOps Lead",
        challenge: `
            <ul>
                <li>Manual call categorization was time-consuming and inconsistent across agents</li>
                <li>High volume of calls requiring immediate routing and prioritization</li>
                <li>Difficulty in tracking call patterns and customer sentiment trends</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Speech-to-Text Integration:</strong> Integrated Twilio API for speech-to-text conversion to process live call audio</li>
                <li><strong>NLP Model Development:</strong> Fine-tuned large RoBERTa model for text classification with unified label set (voicemail, lead, support)</li>
                <li><strong>Automated MLOps Pipeline:</strong> Built end-to-end workflow with Kubeflow enabling non-technical users to retrain models through UI: data ingestion from S3 → preprocessing → training → evaluation → Docker image creation → deployment to Amazon ECR → zero-downtime production update</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Classification Accuracy:</strong> Achieved 90% F1-score in call categorization</li>
                <li><strong>Processing Efficiency:</strong> Reduced call processing time by 75% through automation</li>
                <li><strong>Cloud Deployment:</strong> Successfully deployed on Amazon EKS with Kubeflow</li>
                <li><strong>Business Value:</strong> Enabled rapid retraining by business users without technical expertise</li>
            </ul>
        `,
        technologies: ["RoBERTa", "Hugging Face", "Kubeflow", "Docker", "Terraform", "AWS EKS", "Twilio API", "NLP"]
    },
    project3: {
        title: "MLOps Platform Infrastructure",
        date: "June 2022 - December 2022",
        role: "MLOps Engineer Lead",
        challenge: `
            <ul>
                <li>Multiple AI teams working in silos without standardized workflows</li>
                <li>Manual deployment processes causing delays and errors</li>
                <li>Lack of experiment tracking and model versioning</li>
                <li>No centralized monitoring for production models</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Platform Design:</strong> Led design and deployment of centralized on-premise MLOps ecosystem</li>
                <li><strong>Orchestration:</strong> Leveraged Kubeflow, MLflow, and Kubernetes operators for pipeline orchestration</li>
                <li><strong>Microservices Architecture:</strong> Engineered microservices with Django REST framework</li>
                <li><strong>Monitoring & Logging:</strong> Integrated real-time monitoring (Prometheus/Grafana) and logging (Loki)</li>
                <li><strong>Security:</strong> Implemented RBAC for enterprise security and multi-tenant support</li>
                <li><strong>CI/CD:</strong> Provided mentorship in CI/CD with GitLab and container orchestration</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Debugging Efficiency:</strong> Reduced debugging time by 30% through centralized logging</li>
                <li><strong>Team Productivity:</strong> Improved productivity by 30% with standardized workflows</li>
                <li><strong>Deployment Speed:</strong> Reduced deployment time by 60% through automation</li>
                <li><strong>Multi-Team Support:</strong> Enabled 5+ AI teams to work efficiently on shared infrastructure</li>
            </ul>
        `,
        technologies: ["Kubeflow", "MLflow", "Kubernetes", "Prometheus", "Grafana", "Loki", "Minio", "Django REST", "GitLab CI/CD"]
    },
    project4: {
        title: "AI Sales Assistant Chatbot",
        date: "July 2025 - Present",
        role: "Senior MLOps Engineer",
        challenge: `
            <ul>
                <li>Sales teams needed intelligent assistance for customer inquiries</li>
                <li>Maintaining conversation context across multiple interactions</li>
                <li>Real-time response requirements for customer engagement</li>
                <li>Scaling to handle multiple concurrent conversations</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Conversational AI:</strong> Designed multi-turn conversational chatbot using LangGraph for complex conversation flows</li>
                <li><strong>Session Management:</strong> Implemented Redis for efficient session and context management</li>
                <li><strong>Frontend:</strong> Built responsive user interface with Next.js</li>
                <li><strong>Deployment:</strong> Automated deployment pipeline via GitLab CI/CD</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Response Time:</strong> Average response time under 2 seconds</li>
                <li><strong>Customer Engagement:</strong> Increased customer engagement by 40%</li>
                <li><strong>Sales Support:</strong> Successfully handled 1000+ customer inquiries daily</li>
            </ul>
        `,
        technologies: ["LangGraph", "Redis", "Next.js", "GitLab CI/CD", "LLM", "FastAPI"]
    },
    project5: {
        title: "Enterprise Smart Retail Analytics",
        date: "July 2025 - Present",
        role: "Senior MLOps Engineer - System Lead",
        challenge: `
            <ul>
                <li>Need for real-time customer behavior monitoring across multiple stores</li>
                <li>Manual video review was time-consuming and inefficient</li>
                <li>Security concerns requiring automated detection</li>
                <li>Large-scale data requiring efficient labeling and model improvement</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Multi-Camera System:</strong> Designed scalable computer vision platform for multi-store deployment</li>
                <li><strong>Auto-Labeling Pipeline:</strong> Implemented automated data labeling reducing manual effort</li>
                <li><strong>Active Learning:</strong> Continuous model improvement through active learning strategies</li>
                <li><strong>A/B Testing Framework:</strong> Built framework for testing model versions in production</li>
                <li><strong>Kubernetes Deployment:</strong> Scalable deployment serving multiple retail locations</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Coverage:</strong> Deployed across 10+ retail locations</li>
                <li><strong>Detection Accuracy:</strong> 92% accuracy in customer behavior analysis</li>
                <li><strong>Cost Reduction:</strong> 70% reduction in security monitoring costs</li>
                <li><strong>Real-time Processing:</strong> Processing 100+ camera feeds simultaneously</li>
            </ul>
        `,
        technologies: ["Computer Vision", "Kubernetes", "Active Learning", "MLOps", "Multi-Camera", "A/B Testing"]
    },
    project6: {
        title: "OCR on Construction Drawings",
        date: "June 2023 - September 2023",
        role: "AI Engineer",
        challenge: `
            <ul>
                <li>Manual data extraction from construction drawings was time-consuming and error-prone</li>
                <li>Inconsistent interpretation of structural components across different teams</li>
                <li>High labor costs for document processing and quality assurance</li>
                <li>Need for faster project estimation and material calculation</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Data Labeling:</strong> Utilized PPOCRLabel for creating high-quality training datasets with standardized annotation guidelines</li>
                <li><strong>OCR Pipeline:</strong> Fine-tuned PaddleOCR models with custom preprocessing (adaptive thresholding, noise reduction)</li>
                <li><strong>Advanced Segmentation:</strong> Fine-tuned PaddleSeg (DeepLabV3+) for pixel-level classification of structural components</li>
                <li><strong>Model Optimization:</strong> Applied transfer learning and multi-scale training strategies</li>
                <li><strong>Text Processing:</strong> Applied regex for dimensional data extraction and validation</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Model Performance:</strong> 80% accuracy in structural component identification (25% improvement)</li>
                <li><strong>OCR Accuracy:</strong> 94% character recognition accuracy (30% better than standard)</li>
                <li><strong>Processing Efficiency:</strong> 65% reduction in document processing time</li>
                <li><strong>Quality Improvement:</strong> 70% reduction in human errors through automation</li>
            </ul>
        `,
        technologies: ["PaddleOCR", "PPOCRLabel", "PaddleSeg", "Regex", "Computer Vision", "Deep Learning", "Segmentation"]
    },
    project7: {
        title: "Live Streaming Engagement Platform",
        date: "July 2025 - Present",
        role: "Senior MLOps Engineer",
        challenge: `
            <ul>
                <li>Content creators needed automated engagement with viewers</li>
                <li>Real-time processing of donations and viewer interactions</li>
                <li>Personalized thank-you messages at scale</li>
                <li>Low-latency requirements for live streaming</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Real-Time System:</strong> Built automated thank-you message system for live content creators</li>
                <li><strong>Prompt Engineering:</strong> Utilized advanced prompt engineering techniques for personalized responses</li>
                <li><strong>Backend:</strong> FastAPI backend for high-performance processing</li>
                <li><strong>Deployment:</strong> Continuous deployment pipeline ensuring zero-downtime updates</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Engagement Rate:</strong> Increased viewer engagement by 45%</li>
                <li><strong>Response Time:</strong> Sub-second response generation</li>
                <li><strong>Creator Satisfaction:</strong> 90% satisfaction rate from content creators</li>
            </ul>
        `,
        technologies: ["FastAPI", "LLM", "Prompt Engineering", "CI/CD", "Real-time Processing"]
    },
    project8: {
        title: "MLOps Pipeline (On-Prem)",
        date: "February 2022 - May 2022",
        role: "ML Engineer",
        challenge: `
            <ul>
                <li>Legacy data pipeline inefficiencies and manual deployment processes</li>
                <li>Lack of experiment tracking and reproducibility</li>
                <li>Manual hyperparameter tuning consuming significant time</li>
                <li>No systematic model versioning or rollback capability</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Pipeline Modernization:</strong> Migrated to multi-stage pipelines with Kedro and Hydra</li>
                <li><strong>Experiment Tracking:</strong> Established comprehensive tracking with MLflow</li>
                <li><strong>AutoML:</strong> Leveraged PyCaret and Optuna for automated model selection and hyperparameter optimization</li>
                <li><strong>Model Registry:</strong> Maintained comprehensive registry for versioning and rollbacks</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Efficiency Gain:</strong> Cut manual steps by 40% through automation</li>
                <li><strong>Reproducibility:</strong> 100% reproducible experiments with MLflow tracking</li>
                <li><strong>Time Savings:</strong> 60% reduction in hyperparameter tuning time</li>
                <li><strong>Model Management:</strong> Systematic versioning enabling quick rollbacks</li>
            </ul>
        `,
        technologies: ["Kedro", "MLflow", "Optuna", "PyCaret", "Docker", "Hydra", "Scikit-learn"]
    },
    project9: {
        title: "Multilingual Document Translation Tool",
        date: "June 2025",
        role: "Senior MLOps Engineer",
        challenge: `
            <ul>
                <li>Need for multilingual translation across Japanese, English, and Vietnamese</li>
                <li>Maintaining translation quality across different language pairs</li>
                <li>Handling domain-specific terminology and context</li>
                <li>Deployment and serving requirements for production use</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Model Deployment:</strong> Deployed Aya-101, an mT5-based multilingual model using Hugging Face Transformers</li>
                <li><strong>Neural Machine Translation:</strong> Implemented translation pipeline for Japanese, English, and Vietnamese language pairs</li>
                <li><strong>API Development:</strong> Built REST API for seamless integration with existing systems</li>
                <li><strong>Quality Assurance:</strong> Implemented translation quality checks and validation</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Language Coverage:</strong> Successfully handled 3 language pairs (JP-EN, EN-VI, JP-VI)</li>
                <li><strong>Translation Quality:</strong> Achieved high-quality translations comparable to commercial solutions</li>
                <li><strong>Processing Speed:</strong> Real-time translation with sub-second latency</li>
                <li><strong>Cost Savings:</strong> Eliminated dependency on expensive commercial translation APIs</li>
            </ul>
        `,
        technologies: ["Aya-101", "mT5", "Hugging Face Transformers", "Neural Machine Translation", "Python", "FastAPI"]
    },
    project10: {
        title: "Malay Speech Recognition System",
        date: "July 2021 - October 2021",
        role: "ML Engineer",
        challenge: `
            <ul>
                <li>Limited availability of Malay speech recognition models</li>
                <li>Code-switching between Malay and English in conversations</li>
                <li>Accent and dialect variations in Malay language</li>
                <li>Need for cross-lingual training capabilities</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Model Architecture:</strong> Developed multilingual ASR system using wav2vec2-large-xlsr-53</li>
                <li><strong>Cross-lingual Training:</strong> Leveraged XLSR-53's cross-lingual pre-training for Malay-English</li>
                <li><strong>Data Processing:</strong> Built audio preprocessing pipeline for speech data</li>
                <li><strong>Fine-tuning:</strong> Fine-tuned model on Malay-English mixed speech dataset</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Recognition Accuracy:</strong> Achieved competitive accuracy on Malay speech recognition</li>
                <li><strong>Code-switching:</strong> Successfully handled mixed Malay-English conversations</li>
                <li><strong>Language Support:</strong> Expanded ASR capabilities to underserved language</li>
                <li><strong>Deployment Ready:</strong> Production-ready model for speech-to-text applications</li>
            </ul>
        `,
        technologies: ["wav2vec2", "XLSR-53", "Hugging Face", "PyTorch", "Speech Processing", "ASR"]
    },
    project11: {
        title: "Dentist Appointment Scheduler",
        date: "May 2025",
        role: "Senior MLOps Engineer",
        challenge: `
            <ul>
                <li>Manual appointment booking process causing inefficiencies</li>
                <li>High call volume overwhelming reception staff</li>
                <li>Need for 24/7 booking availability</li>
                <li>Integration with existing calendar systems required</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Contact Center:</strong> Built AWS Connect contact center infrastructure</li>
                <li><strong>Conversational AI:</strong> Integrated Amazon Lex chatbot for natural language understanding</li>
                <li><strong>Intent Recognition:</strong> Developed intents for appointment booking, rescheduling, and cancellation</li>
                <li><strong>Calendar Integration:</strong> Connected with appointment management system</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Automation Rate:</strong> 70% of appointments booked without human intervention</li>
                <li><strong>Availability:</strong> 24/7 booking capability for patients</li>
                <li><strong>Staff Efficiency:</strong> Reduced reception staff workload by 50%</li>
                <li><strong>User Satisfaction:</strong> 85% positive feedback from patients</li>
            </ul>
        `,
        technologies: ["AWS Connect", "Amazon Lex", "Chatbot", "NLP", "Lambda", "DynamoDB"]
    },
    project12: {
        title: "Behavioral Analysis System for Fraud Detection",
        date: "February 2023 - March 2023",
        role: "AI Engineer",
        challenge: `
            <ul>
                <li>Complex loan fraud patterns requiring multimodal analysis</li>
                <li>Integrating diverse data types: video, audio, heart rate, text, tabular</li>
                <li>Real-time analysis requirements for fraud detection</li>
                <li>Maintaining high accuracy while minimizing false positives</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Multimodal Data Fusion:</strong> Developed pipeline combining video, audio, heart rate, text, and tabular data</li>
                <li><strong>Feature Extraction:</strong> Extracted behavioral features from each data modality</li>
                <li><strong>Fusion Architecture:</strong> Built late fusion model combining predictions from all modalities</li>
                <li><strong>Anomaly Detection:</strong> Implemented behavioral anomaly detection algorithms</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Detection Accuracy:</strong> Achieved 85% accuracy on loan fraud prediction</li>
                <li><strong>False Positive Rate:</strong> Reduced false positives by 40% through multimodal approach</li>
                <li><strong>Early Detection:</strong> Identified potential fraud cases 2 weeks earlier on average</li>
                <li><strong>Financial Impact:</strong> Prevented estimated losses through early fraud detection</li>
            </ul>
        `,
        technologies: ["Multimodal AI", "PyTorch", "Computer Vision", "Audio Processing", "Data Fusion", "Anomaly Detection"]
    },
    project13: {
        title: "Multi-Agent System for Automated Invoice Processing",
        date: "June 2025",
        role: "Senior MLOps Engineer",
        challenge: `
            <ul>
                <li>Complex invoice processing workflows with multiple decision points</li>
                <li>Variety of invoice formats from different vendors</li>
                <li>Need for validation, approval routing, and data extraction</li>
                <li>Integration with accounting systems required</li>
            </ul>
        `,
        implementation: `
            <ul>
                <li><strong>Multi-Agent Architecture:</strong> Developed sophisticated multi-agent system using Ollama and Mistral</li>
                <li><strong>Specialized Agents:</strong> Created agents for OCR, validation, approval routing, and data entry</li>
                <li><strong>Workflow Orchestration:</strong> Implemented coordination between agents for seamless processing</li>
                <li><strong>LLM Integration:</strong> Leveraged Mistral LLM for intelligent document understanding</li>
            </ul>
        `,
        impact: `
            <ul>
                <li><strong>Processing Speed:</strong> 90% reduction in invoice processing time</li>
                <li><strong>Accuracy:</strong> 95% accuracy in data extraction and validation</li>
                <li><strong>Cost Savings:</strong> Reduced manual processing costs by 80%</li>
                <li><strong>Scalability:</strong> Capable of processing 10,000+ invoices per day</li>
            </ul>
        `,
        technologies: ["Multi-Agent System", "Ollama", "Mistral", "LLM", "OCR", "Workflow Automation"]
    }
};

// Modal functionality
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');

// Get all project links
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            // Update modal content
            document.querySelector('.modal-project-title').textContent = project.title;
            document.querySelector('.modal-project-date').textContent = project.date;
            document.querySelector('.modal-project-role').textContent = project.role;
            document.querySelector('.modal-challenge').innerHTML = project.challenge;
            document.querySelector('.modal-implementation').innerHTML = project.implementation;
            document.querySelector('.modal-impact').innerHTML = project.impact;
            
            // Update technologies
            const techContainer = document.querySelector('.modal-tech-tags');
            techContainer.innerHTML = project.technologies
                .map(tech => `<span class="tech-tag">${tech}</span>`)
                .join('');
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
modalClose.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

