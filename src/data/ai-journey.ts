export interface TimelineStep {
  title: string
  subtitle: string
  description: string
  status: "completed" | "stopped"
}

export interface AIProject {
  name: string
  description: string
  tech: string[]
  repo?: string
  highlight?: boolean
}

export interface AICertificate {
  name: string
  issuer: string
}

export interface AISkillCategory {
  label: string
  items: string[]
}

export const timelineSteps: TimelineStep[] = [
  {
    title: "Data Science Foundations",
    subtitle: "DEPI IBM Data Science Track",
    description: "Learned Python for Data Science core syntax and foundational programming. Used Jupyter Notebooks, GitHub, and cloud environments. Extracted and queried data using SQL and APIs. Analyzed and visualized data with Pandas, NumPy, Matplotlib, and Seaborn. Built regression, classification, clustering, and recommender systems using Scikit-Learn. Completed a hands-on capstone project applying the full data science pipeline to a real-world dataset.",
    status: "completed",
  },
  {
    title: "Machine Learning Specialization",
    subtitle: "Andrew Ng — Stanford / DeepLearning.AI",
    description: "Studied supervised learning (linear/logistic regression, neural networks, decision trees), advanced algorithms (ensembles, clustering, anomaly detection, recommender systems), and practical ML engineering (bias/variance, error analysis, CV pipelines, sklearn workflows). Built a strong theoretical and applied foundation in modern ML.",
    status: "completed",
  },
  {
    title: "Deep Learning for Computer Vision",
    subtitle: "Coursat.ai — DL for CV Certificate",
    description: "Studied deep learning fundamentals applied to computer vision — CNNs, backpropagation, activation functions, and training pipelines for image data. Built custom CNN architectures from scratch.",
    status: "completed",
  },
  {
    title: "Computer Vision Applications",
    subtitle: "Coursat.ai — CV Applications Certificate",
    description: "Applied CV techniques to real-world problems: image classification with AlexNet and ResNet, facial emotion recognition (FER-2013), and transfer learning using pre-trained models like ResNet50V2.",
    status: "completed",
  },
  {
    title: "Attention & Transformers",
    subtitle: "Self-study — 'Attention Is All You Need' paper",
    description: "Studied the Attention mechanism and the Transformer architecture. Worked through the seminal paper, understanding multi-head attention, positional encodings, and how transformers revolutionized sequence modeling and vision tasks.",
    status: "stopped",
  },
  {
    title: "Object Detection & Mobile CV",
    subtitle: "Ala Mahlak — Driver Monitoring System",
    description: "Built an on-device real-time Driver Monitoring System fusing Google ML Kit Face Mesh, YOLOv8n (ONNX), head pose estimation via pure Dart solvePnP, and multi-signal fusion. Implemented EAR (eye closure), MAR (yawning), gaze estimation, PERCLOS analysis, and a temporal state machine — entirely offline at ~15 FPS on mid-range Android.",
    status: "stopped",
  },
]

export const aiProjects: AIProject[] = [
  {
    name: "Ala Mahlak — Driver Monitoring System",
    description: "On-device real-time DMS for a Flutter ride-sharing app. Fuses Google ML Kit Face Mesh (468 landmarks), YOLOv8n ONNX object detection (phone, food/drink), pure Dart head pose estimation (solvePnP), EAR/MAR gaze analysis, and a temporal state machine with PERCLOS — classifying 7 distraction states at ~15 FPS entirely offline.",
    tech: ["Flutter", "Google ML Kit", "YOLOv8n", "ONNX", "Dart", "BLoC"],
    repo: "https://github.com/Ala-Mahlak/Ala-Mahlak-Flutter",
    highlight: true,
  },
  {
    name: "OpenCV-Learning",
    description: "Structured computer vision learning journey with OpenCV and MediaPipe — covers image processing fundamentals, DNN-based object/face detection, pose estimation, hand tracking, and real-time projects.",
    tech: ["OpenCV", "MediaPipe", "Python", "DNN"],
    repo: "https://github.com/ElDEEB21/OpenCV-Learning",
  },
  {
    name: "FER-2013 CNN vs ResNet",
    description: "Facial emotion recognition on FER-2013 — head-to-head comparison between a custom CNN built from scratch and transfer learning with ResNet50V2 (TensorFlow/Keras). Includes EDA, class-balanced training, and confusion-matrix evaluation.",
    tech: ["TensorFlow/Keras", "ResNet50V2", "CNN", "Python"],
    repo: "https://github.com/ElDEEB21/FER-2013-CNN-ResNet",
  },
  {
    name: "Intel Image Classification",
    description: "Image classification on the Intel dataset using two architectures: AlexNet and ResNet18 with PyTorch. Covers the full workflow from data preprocessing through training, evaluation, and inference.",
    tech: ["PyTorch", "AlexNet", "ResNet18", "Python"],
    repo: "https://github.com/ElDEEB21/intel-image-classification",
  },
]

export const aiCertificates: AICertificate[] = [
  {
    name: "Deep Learning for Computer Vision",
    issuer: "coursat.ai",
  },
  {
    name: "Computer Vision Applications",
    issuer: "coursat.ai",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Andrew Ng — Stanford / DeepLearning.AI",
  },
]

export const aiSkillCategories: AISkillCategory[] = [
  {
    label: "Frameworks & Libraries",
    items: ["PyTorch", "TensorFlow/Keras", "OpenCV", "MediaPipe", "Scikit-Learn", "ONNX"],
  },
  {
    label: "Data & Deployment",
    items: ["Pandas", "NumPy", "Streamlit", "FastAPI", "Jupyter"],
  },
  {
    label: "Concepts",
    items: ["CNNs", "Transfer Learning", "Object Detection", "Pose Estimation", "Attention Mechanisms", "PERCLOS"],
  },
]
