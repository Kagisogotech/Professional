tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1e40af',
                        secondary: '#1d4ed8',
                        accent: '#3b82f6',
                        lightBlue: '#dbeafe',
                        darkBlue: '#1e3a8a',
                        dark: '#042b04ff'
                    }
                }
            }
        }

   // Typing animation
        const texts = [
            "Software Developer",
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeText() {
            const currentText = texts[textIndex];
            const typingElement = document.getElementById('typing-text');
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeText, isDeleting ? 50 : 100);
        }

        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });

        // Fade in animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // Skill bar animation
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                }
            });
        }
// Certificate functions
        function viewCertificate(certId) {
            alert(`Certificate viewer for ${certId} would open here. This is a demo portfolio - certificates are for demonstration purposes.`);
        }

        function verifyCertificate(certId) {
            alert(`Certificate verification for ${certId} would redirect to the official verification portal. This is a demo portfolio.`);
        }

        function viewCertificate(certId) {
            const modal = document.getElementById('certificate-modal');
            const title = document.getElementById('certificate-title');
            const content = document.getElementById('certificate-content');
        }  
            const certificates = {
                'aws-ml': {
                    title: 'AWS Machine Learning Specialty Certificate',
                    content: `
                        <div class="space-y-6">
                            <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                <div class="flex items-center mb-4">
                                    <div class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6.763 10.036c.096 0 .192-.024.288-.072l6.024-3.024c.192-.096.312-.288.312-.504s-.12-.408-.312-.504L7.051 2.928c-.192-.096-.384-.096-.576 0L.451 5.932c-.192.096-.312.288-.312.504s.12.408.312.504l6.024 3.024c.096.048.192.072.288.072z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-orange-800">AWS Certified Machine Learning - Specialty</h4>
                                        <p class="text-orange-600">Certificate ID: AWS-MLS-2024-KM-001</p>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <strong>Issue Date:</strong> March 15, 2024<br>
                                        <strong>Expiration:</strong> March 15, 2027<br>
                                        <strong>Score:</strong> 892/1000 (Pass: 750)
                                    </div>
                                    <div>
                                        <strong>Validation:</strong> ✅ Verified<br>
                                        <strong>Status:</strong> Active<br>
                                        <strong>Credential Level:</strong> Specialty
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">Skills Validated:</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Data Engineering for ML (20%)</li>
                                    <li>Exploratory Data Analysis (24%)</li>
                                    <li>Modeling (36%)</li>
                                    <li>Machine Learning Implementation and Operations (20%)</li>
                                </ul>
                            </div>
                            
                            <div class="flex gap-4">
                                <button onclick="downloadCertificate('aws-ml')" class="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                                    Download PDF
                                </button>
                                <a href="https://aws.amazon.com/verification" target="_blank" class="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors">
                                    Verify Online
                                </a>
                            </div>
                        </div>
                    `
                },
            
            
                'gcp-ml': {
                    title: 'Google Cloud Professional ML Engineer Certificate',
                    content: `
                        <div class="space-y-6">
                            <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <div class="flex items-center mb-4">
                                    <div class="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-blue-800">Google Cloud Professional ML Engineer</h4>
                                        <p class="text-blue-600">Certificate ID: GCP-PMLE-2024-KM-002</p>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <strong>Issue Date:</strong> February 28, 2024<br>
                                        <strong>Expiration:</strong> February 28, 2026<br>
                                        <strong>Score:</strong> 85% (Pass: 70%)
                                    </div>
                                    <div>
                                        <strong>Validation:</strong> ✅ Verified<br>
                                        <strong>Status:</strong> Active<br>
                                        <strong>Credential Level:</strong> Professional
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">Competencies Demonstrated:</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Architecting low-code ML solutions</li>
                                    <li>Collaborating within and across teams to manage data and models</li>
                                    <li>Scaling prototypes into ML models</li>
                                    <li>Serving and scaling models</li>
                                    <li>Automating and orchestrating ML pipelines</li>
                                    <li>Monitoring ML solutions</li>
                                </ul>
                            </div>
                            
                            <div class="flex gap-4">
                                <button onclick="downloadCertificate('gcp-ml')" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                    Download PDF
                                </button>
                                <a href="https://cloud.google.com/certification/verify" target="_blank" class="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                                    Verify Online
                                </a>
                            </div>
                        </div>
                    `
                },
                'tensorflow': {
                    title: 'TensorFlow Developer Certificate',
                    content: `
                        <div class="space-y-6">
                            <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                <div class="flex items-center mb-4">
                                    <div class="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.153 3.564v-5.31zm21.416 5.311l-6.153-3.564v14.019L12.46 24V0l10.248 5.856v5.311z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-orange-800">TensorFlow Developer Certificate</h4>
                                        <p class="text-orange-600">Certificate ID: TF-DEV-2024-KM-003</p>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <strong>Issue Date:</strong> January 20, 2024<br>
                                        <strong>Expiration:</strong> January 20, 2027<br>
                                        <strong>Exam Duration:</strong> 5 hours
                                    </div>
                                    <div>
                                        <strong>Validation:</strong> ✅ Verified<br>
                                        <strong>Status:</strong> Active<br>
                                        <strong>Platform:</strong> TensorFlow 2.x
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">Skills Demonstrated:</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Building and training neural network models using TensorFlow 2.x</li>
                                    <li>Image classification, object detection, text classification</li>
                                    <li>Time series, sequences and predictions</li>
                                    <li>Natural language processing (NLP)</li>
                                    <li>Model optimization and deployment</li>
                                </ul>
                            </div>
                            
                            <div class="flex gap-4">
                                <button onclick="downloadCertificate('tensorflow')" class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                                    Download PDF
                                </button>
                                <a href="https://www.credential.net/profile/kagisomonene" target="_blank" class="border border-orange-600 text-orange-600 px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors">
                                    Verify Online
                                </a>
                            </div>
                        </div>
                    `
                },
                'azure-ai': {
                    title: 'Microsoft Azure AI Engineer Associate Certificate',
                    content: `
                        <div class="space-y-6">
                            <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <div class="flex items-center mb-4">
                                    <div class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.085 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892h6.326l.977 2.892a1.62 1.62 0 0 0 1.535 1.103h4.667z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-blue-800">Microsoft Certified: Azure AI Engineer Associate</h4>
                                        <p class="text-blue-600">Certificate ID: MSFT-AI102-2024-KM-004</p>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <strong>Issue Date:</strong> April 10, 2024<br>
                                        <strong>Expiration:</strong> April 10, 2025<br>
                                        <strong>Exam:</strong> AI-102
                                    </div>
                                    <div>
                                        <strong>Validation:</strong> ✅ Verified<br>
                                        <strong>Status:</strong> Active<br>
                                        <strong>Credential Level:</strong> Associate
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">Azure AI Services Expertise:</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Azure Cognitive Services implementation</li>
                                    <li>Computer Vision and Custom Vision services</li>
                                    <li>Natural Language Processing with Azure</li>
                                    <li>Speech services and conversational AI</li>
                                    <li>Azure Machine Learning integration</li>
                                    <li>Responsible AI practices</li>
                                </ul>
                            </div>
                            
                            <div class="flex gap-4">
                                <button onclick="downloadCertificate('azure-ai')" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Download PDF
                                </button>
                                <a href="https://learn.microsoft.com/en-us/users/kagisomonene/credentials" target="_blank" class="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                                    Verify Online
                                </a>
                            </div>
                        </div>
                    `
                },
            
                'deeplearning': {
                    title: 'Deep Learning Specialization Certificate',
                    content: `
                        <div class="space-y-6">
                            <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                                <div class="flex items-center mb-4">
                                    <div class="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-indigo-800">Deep Learning Specialization</h4>
                                        <p class="text-indigo-600">Certificate ID: COURSERA-DL-2024-KM-005</p>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <strong>Issue Date:</strong> December 15, 2023<br>
                                        <strong>Institution:</strong> deeplearning.ai<br>
                                        <strong>Platform:</strong> Coursera
                                    </div>
                                    <div>
                                        <strong>Validation:</strong> ✅ Verified<br>
                                        <strong>Status:</strong> Completed<br>
                                        <strong>Instructor:</strong> Andrew Ng
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">Specialization Courses Completed:</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Neural Networks and Deep Learning</li>
                                    <li>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</li>
                                    <li>Structuring Machine Learning Projects</li>
                                    <li>Convolutional Neural Networks</li>
                                    <li>Sequence Models</li>
                                </ul>
                            </div>
                            
                            <div class="flex gap-4">
                                <button onclick="downloadCertificate('deeplearning')" class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                    Download PDF
                                </button>
                                <a href="https://coursera.org/verify/specialization/DLSPEC2024KM" target="_blank" class="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                                    Verify Online
                                </a>
                            </div>
                        </div>
                    `
                },
                'mlops': {
                    title: 'MLOps & Production Systems Certificate',
                    content: `
                        <div class="space-y-6">
                            <div class="bg-green-50 p-6 rounded-lg border border-green-200">
                                <div class="flex items-center mb-4">
                                    <div class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-green-800">MLOps & Production Systems Certification</h4>
                                        <p class="text-green-600">Certificate ID: MLOPS-PROD-2024-KM-006</p>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <strong>Issue Date:</strong> May 5, 2024<br>
                                        <strong>Institution:</strong> ML Engineering Institute<br>
                                        <strong>Duration:</strong> 120 hours
                                    </div>
                                    <div>
                                        <strong>Validation:</strong> ✅ Verified<br>
                                        <strong>Status:</strong> Active<br>
                                        <strong>Credential Level:</strong> Advanced
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">MLOps Competencies:</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>CI/CD pipelines for ML models</li>
                                    <li>Model versioning and experiment tracking</li>
                                    <li>Automated model deployment and scaling</li>
                                    <li>Model monitoring and drift detection</li>
                                    <li>Infrastructure as Code for ML systems</li>
                                    <li>Production ML system architecture</li>
                                </ul>
                            </div>
                            `
                        },
                    }        

        // Project demo functions
        function openDemo(projectId) {
            const modal = document.getElementById('demo-modal');
            const title = document.getElementById('demo-title');
            const content = document.getElementById('demo-content');
            
            const demos = {
                project1: {
                    title: 'Predictive Analytics Dashboard - Live Demo',
                    content: `
                        <div class="space-y-6">
                            <div class="bg-gray-100 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">Demo Features:</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Interactive sales forecasting with real-time data visualization</li>
                                    <li>Multiple ML models comparison (Random Forest, XGBoost, LSTM)</li>
                                    <li>Confidence intervals and prediction accuracy metrics</li>
                                    <li>Customizable time horizons and feature selection</li>
                                </ul>
                            </div>
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <p class="text-sm"><strong>Note:</strong> This is a demonstration environment. The live system processes over 10,000 data points daily and integrates with enterprise CRM systems.</p>
                            </div>
                            <div class="flex gap-4">
                                <button class="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors">
                                    Launch Interactive Demo
                                </button>
                                <button class="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">
                                    View Documentation
                                </button>
                            </div>
                        </div>
                    `
                },
                project2: {
                    title: 'Computer Vision Classifier - Live Demo',
                    content: `
                        <div class="space-y-6">
                            <div class="bg-gray-100 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">Demo Features:</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Real-time image classification with confidence scores</li>
                                    <li>Support for multiple image formats and batch processing</li>
                                    <li>Model performance metrics and confusion matrix</li>
                                    <li>Grad-CAM visualizations for model interpretability</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <p class="text-sm"><strong>Technical Details:</strong> Built with TensorFlow 2.x, deployed using Flask API with Docker containerization. Achieves 96.2% accuracy on validation set.</p>
                            </div>
                            <div class="flex gap-4">
                                <button class="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors">
                                    Try Image Upload
                                </button>
                                <button class="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">
                                    API Documentation
                                </button>
                            </div>
                        </div>
                    `
                }
            };
            
            title.textContent = demos[projectId].title;
            content.innerHTML = demos[projectId].content;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function openCapstoneDemo() {
            const modal = document.getElementById('demo-modal');
            const title = document.getElementById('demo-title');
            const content = document.getElementById('demo-content');
            
            title.textContent = 'Capstone Project - AI Recommendation Engine Showcase';
            content.innerHTML = `
                <div class="space-y-6">
                    <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
                        <h4 class="font-semibold mb-3 text-lg">🎯 Project Overview</h4>
                        <p class="text-sm mb-3">End-to-end recommendation system serving 1M+ users with real-time personalization, built using hybrid collaborative filtering and deep learning approaches.</p>
                        <div class="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <strong>Performance Metrics:</strong>
                                <ul class="list-disc list-inside mt-1">
                                    <li>NDCG@10: 0.847</li>
                                    <li>Click-through rate: +23%</li>
                                    <li>Response time: <50ms</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Technical Stack:</strong>
                                <ul class="list-disc list-inside mt-1">
                                    <li>PyTorch + FastAPI</li>
                                    <li>Redis + PostgreSQL</li>
                                    <li>AWS ECS + Docker</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <h4 class="font-semibold mb-2">🚀 Live Presentation Available</h4>
                        <p class="text-sm mb-3">I can provide a comprehensive live demonstration including architecture walkthrough, model performance analysis, and Q&A session.</p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-4">
                        <button class="bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                            Schedule Live Demo
                        </button>
                        <button class="border border-primary text-primary px-4 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                            View Architecture
                        </button>
                    </div>
                </div>
            `;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function openGithub(projectId) {
            const urls = {
                resumebuilder: 'https://github.com/kagisogotech/Resumebuilder',
                sentimentanalysis: 'https://github.com/kagisogotech/SentimentAnalysis',
                studybuddy: 'https://github.com/kagisogotech/ai-study-buddy',
                project2: 'https://github.com/alexchen-ai/computer-vision-classifier',
                capstone: 'https://github.com/alexchen-ai/ai-recommendation-engine'
            };
            window.open(urls[projectId], '_blank');
        }

        function closeModal() {
            const modal = document.getElementById('demo-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function downloadResume() {
            // In a real implementation, this would download an actual PDF
            alert('Resume download initiated! In a real implementation, this would download your ATS-optimized PDF resume with AI/ML keywords and project highlights.');
        }

        // Certificate viewing function
        function viewCertificate(certId) {
            const certificates = {
                'AI for Everyone': {
                    title: 'AI for Everyone',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/AI for Everyone.pdf',
                    description: 'Validates expertise in building, training, tuning, and deploying ML models on AWS. Covers data engineering, exploratory data analysis, modeling, and ML implementation & operations.'
                },
                'AI': {
                    title: 'AI on Azure',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/AI on Azure.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'AI_Essential': {
                    title: 'AI Essential',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/AI_Essentials.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'Building AI': {
                    title: 'Building AI powered Chatbot',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/Building AI powered Chatbots.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'Gen': {
                    title: 'Generative AI',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/Generative AI with LLM.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'Intro': {
                    title: 'Introduction to AI',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/Introduction to AI.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'Intro to Gen': {
                    title: 'Intro to Generative AI',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/Introduction to Gen AI.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'Intro to Res': {
                    title: 'Introduction to Responsible AI',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/Introduction to Responsible AI.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'Prompt': {
                    title: 'Prompt Engineerig with Chatgpt',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/Prompt_Engineering_with_ChatGPT.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'python': {
                    title: 'Python For Data Science',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/Python_for_data_science.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'Trust': {
                    title: 'Trustworthy AI',
                    issuer: 'Coursera',
                    date: '2025',
                    file: './certificates/Trustworthy AI.pdf',
                    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Covers neural networks, computer vision, natural language processing, and time series forecasting.'
                },
                'ibm-ds': {
                    title: 'IBM Data Science Professional Certificate',
                    issuer: 'IBM',
                    date: '2023',
                    file: './certificates/ibm-data-science-certificate.pdf',
                    description: 'Comprehensive program covering Python, SQL, data analysis, data visualization, machine learning, and applied data science. Includes hands-on projects and real-world applications.'
                }
            };

            const cert = certificates[certId];
            if (cert) {
                // Try to open the certificate file
                const link = document.createElement('a');
                link.href = cert.file;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                
                // Check if file exists by trying to open it
                fetch(cert.file)
                    .then(response => {
                        if (response.ok) {
                            // File exists, open it
                            link.click();
                        } else {
                            // File doesn't exist, show info modal
                            showCertificateModal(cert);
                        }
                    })
                    .catch(() => {
                        // File doesn't exist or fetch failed, show info modal
                        showCertificateModal(cert);
                    });
            }
        }

        // Show certificate modal when file is not available
        function showCertificateModal(cert) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl max-w-md w-full p-6 relative">
                    <button onclick="this.parentElement.parentElement.remove()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div class="text-center mb-4">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">${cert.title}</h3>
                        <p class="text-gray-600 mb-1">${cert.issuer}</p>
                        <p class="text-sm text-gray-500 mb-4">${cert.date}</p>
                    </div>
                    <p class="text-gray-700 mb-6">${cert.description}</p>
                    <div class="bg-blue-50 p-4 rounded-lg mb-4">
                        <p class="text-sm text-blue-800">
                            <strong>📁 To view the actual certificate:</strong><br>
                            Place your certificate file at: <code class="bg-blue-100 px-1 rounded">${cert.file}</code>
                        </p>
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Close
                    </button>
                </div>
            `;
            document.body.appendChild(modal);
        }

 // Document viewer function - displays documents in modal
        function viewDocumentation(docPath, title) {
            // Create modal overlay
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                    <div class="flex justify-between items-center p-6 border-b border-gray-200">
                        <h3 class="text-2xl font-bold text-gray-800">${title}</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
                    </div>
                    <div class="flex-1 overflow-hidden">
                        <iframe src="${docPath}" class="w-full h-full border-0" style="min-height: 600px;">
                            <div class="p-6 text-center">
                                <p class="text-gray-600 mb-4">Unable to display document in browser.</p>
                                <a href="${docPath}" download class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block">
                                    📄 Download Document
                                </a>
                            </div>
                        </iframe>
                    </div>
                    <div class="p-6 border-t border-gray-200 text-center bg-gray-50">
                        <div class="flex gap-4 justify-center">
                            <a href="${docPath}" download class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                📥 Download Document
                            </a>
                            <button onclick="this.closest('.fixed').remove()" class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                                Close Viewer
                            </button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        // Initialize animations
        window.addEventListener('scroll', () => {
            animateOnScroll();
            animateSkillBars();
        });

        // Chatbot functionality
        let chatOpen = false;
        let chatHistory = [];

        // Knowledge base for the chatbot
        const knowledgeBase = {
            projects: {
                keywords: ['project', 'work', 'portfolio', 'built', 'created', 'developed'],
                response: "Kagiso has built several impressive AI/ML projects:\n\n🏗️ Professional Resume Builder - Interactive web app with ATS optimization and PDF export\n\n📊 Sentiment Analysis Tool - Real-time text sentiment classification with confidence scores\n\n🤖 AI Study Buddy Platform - Complete end-to-end learning platform with personalized study plans\n\n🎯 AI Recommendation Engine - Capstone project serving 1M+ users with 94% accuracy\n\nWould you like to know more about any specific project?"
            },
            skills: {
                keywords: ['skill', 'technology', 'programming', 'language', 'framework', 'tool'],
                response: "Kagiso's technical expertise includes:\n\nProgramming & AI/ML:\n• Python (95%) - TensorFlow, PyTorch, Scikit-learn\n• Deep Learning - Neural networks, CNNs, RNNs\n• Machine Learning - Supervised/unsupervised learning\n\nData & Cloud:\n• SQL/NoSQL databases\n• AWS/Azure cloud platforms\n• Docker/Kubernetes\n• Apache Spark\n\nCore Competencies:\n• MLOps and model deployment\n• Predictive analytics\n• Computer vision\n• Natural language processing"
            },
            contact: {
                keywords: ['contact', 'email', 'reach', 'hire', 'connect', 'linkedin', 'github'],
                response: "You can reach Kagiso through:\n\n📧 Email: kagiso.thierry31@gmail.com\n💼 LinkedIn: Professional profile for networking\n💻 GitHub: Code repositories and projects\n📄Resume: Download ATS-optimized PDF\n\nKagiso is always excited to discuss AI/ML opportunities and collaborate on innovative projects!"
            },
            experience: {
                keywords: ['experience', 'background', 'career', 'education', 'bootcamp'],
                response: "Kagiso is a dedicated AI/ML Engineer with:\n\n🎓 Training: Intensive AI/ML bootcamp graduate\n🏆 Achievement: 15+ completed projects with 94% model accuracy\n💡 Specialization: Machine learning, deep learning, and scalable AI systems\n🚀 Focus: Transforming data into intelligent solutions for real-world problems\n\nKagiso combines theoretical knowledge with hands-on experience in building production-ready AI systems."
            },
            about: {
                keywords: ['about', 'who', 'bio', 'story', 'passion'],
                response: "Kagiso Monene is a passionate AI/ML Engineer who transforms data into intelligent solutions! 🚀\n\nWhat drives Kagiso:\n• Fascination with how machines learn and adapt\n• Building practical AI implementations with measurable value\n• Creating systems that solve real-world problems\n\nProfessional approach:\n• Focus on enterprise-grade solutions\n• Team leadership in AI/ML product development\n• Open-source contributions to the AI community\n\nKagiso believes in making AI accessible and impactful for everyone!"
            },
            availability: {
                keywords: ['available', 'availability', 'free', 'hire', 'work', 'job', 'opportunity', 'when'],
                response: "Great news! Kagiso is currently available for new opportunities! 🎉\n\n✅ Status: Available for hire\n📧 Next Steps: Contact via email at kagiso.thierry31@gmail.com\n⚡ Response Time: Typically responds within 24 hours\n💼 Open to: Full-time positions, contract work, and consulting projects\n\nKagiso is excited to discuss how his AI/ML expertise can contribute to your team's success!"
            }
        };

        function toggleChat() {
            const chatWindow = document.getElementById('chat-window');
            const chatIcon = document.getElementById('chat-icon');
            const closeIcon = document.getElementById('close-icon');
            const notification = document.getElementById('chat-notification');
            
            chatOpen = !chatOpen;
            
            if (chatOpen) {
                chatWindow.classList.remove('hidden');
                chatWindow.classList.add('flex');
                chatIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                notification.style.display = 'none';
            } else {
                chatWindow.classList.add('hidden');
                chatWindow.classList.remove('flex');
                chatIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        }

        function addMessage(message, isUser = false) {
            const messagesContainer = document.getElementById('chat-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'flex items-start space-x-2';
            
            if (isUser) {
                messageDiv.className += ' flex-row-reverse space-x-reverse';
                messageDiv.innerHTML = `
                    <div class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        U
                    </div>
                    <div class="bg-blue-500 text-white p-3 rounded-lg shadow-sm max-w-xs">
                        <p class="text-sm">${message}</p>
                    </div>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        AI
                    </div>
                    <div class="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                        <p class="text-sm whitespace-pre-line">${message}</p>
                    </div>
                `;
            }
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function generateResponse(userMessage) {
            const message = userMessage.toLowerCase();
            
            // Check each category in knowledge base
            for (const [category, data] of Object.entries(knowledgeBase)) {
                if (data.keywords.some(keyword => message.includes(keyword))) {
                    return data.response;
                }
            }
            
            // Default responses for common queries
            if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
                return "Hello! 👋 I'm Kagiso's AI assistant. I can help you learn about his projects, skills, experience, and how to get in touch. What would you like to know?";
            }
            
            if (message.includes('help')) {
                return "I can help you with information about:\n\n• Kagiso's AI/ML projects and portfolio\n• Technical skills and expertise\n• Professional background and experience\n• Contact information and availability\n\nJust ask me anything, or use the quick action buttons below!";
            }
            
            if (message.includes('resume') || message.includes('cv')) {
                return "You can download Kagiso's ATS-optimized resume with AI/ML keywords and project highlights! Just scroll down to the contact section and click the 'Download PDF Resume' button. 📄\n\nThe resume includes detailed project descriptions, technical skills, and achievements in AI/ML engineering.";
            }
            
            // Default response
            return "That's a great question! I can help you learn about Kagiso's projects, skills, experience, availability, and contact information. Try asking about:\n\n• 'Tell me about Kagiso's projects'\n• 'What are Kagiso's skills?'\n• 'Is Kagiso available for work?'\n• 'How can I contact Kagiso?'\n\nOr use the quick action buttons below! 😊";
        }

        function sendMessage() {
            const input = document.getElementById('chat-input');
            const message = input.value.trim();
            
            if (message) {
                // Add user message
                addMessage(message, true);
                chatHistory.push({user: message, timestamp: new Date()});
                
                // Clear input
                input.value = '';
                
                // Show typing indicator
                setTimeout(() => {
                    const response = generateResponse(message);
                    addMessage(response, false);
                    chatHistory.push({bot: response, timestamp: new Date()});
                }, 500);
            }
        }

        function sendQuickMessage(message) {
            document.getElementById('chat-input').value = message;
            sendMessage();
        }

        // Initialize chatbot
        document.getElementById('chat-toggle').addEventListener('click', toggleChat);
        
        document.getElementById('chat-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        // Show notification after 5 seconds
        setTimeout(() => {
            if (!chatOpen) {
                document.getElementById('chat-notification').style.display = 'flex';
            }
        }, 5000);

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', function() {
            typeText();
            animateOnScroll();
            
            // Close modal when clicking outside
            document.getElementById('demo-modal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
        });
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97d586cba4780de1',t:'MTc1NzU3NjUyNi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
