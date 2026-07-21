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
    subtitle: "DEPI · Andrew Ng ML Specialization",
    description: "Started with Python for data analysis (Pandas, Matplotlib, Seaborn), built ML models with Scikit-Learn and XGBoost, and deployed pipelines with FastAPI and Streamlit. Completed the DEPI IBM Data Science track.",
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
    title: "Object Detection",
    subtitle: "OpenCV DNN + MediaPipe",
    description: "Explored object detection through OpenCV's DNN module and MediaPipe — face detection, pose estimation, hand tracking, and real-time object detection. Paused at the Transformers paper before diving deeper into detection-specific architectures.",
    status: "stopped",
  },
]

export const aiProjects: AIProject[] = [
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
    highlight: true,
  },
  {
    name: "Intel Image Classification",
    description: "Image classification on the Intel dataset using two architectures: AlexNet and ResNet18 with PyTorch. Covers the full workflow from data preprocessing through training, evaluation, and inference.",
    tech: ["PyTorch", "AlexNet", "ResNet18", "Python"],
    repo: "https://github.com/ElDEEB21/intel-image-classification",
  },
  {
    name: "Rossmann Store Sales Prediction",
    description: "ML pipeline predicting Rossmann store sales — EDA, feature engineering, and XGBoost model with GridSearchCV (97.9% R²). Deployed via Streamlit, FastAPI, and Power BI.",
    tech: ["XGBoost", "Scikit-Learn", "FastAPI", "Streamlit", "Power BI"],
    repo: "https://github.com/ElDEEB21/Rossmann-Store-Sales-DS",
    highlight: true,
  },
  {
    name: "Graduation Project",
    description: "Integrated computer vision (OpenCV/DNN) into a Flutter mobile application — combining CV processing capabilities with a cross-platform mobile interface for real-world deployment.",
    tech: ["OpenCV", "Flutter", "Dart", "Python"],
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
]

export const aiSkillCategories: AISkillCategory[] = [
  {
    label: "Frameworks & Libraries",
    items: ["PyTorch", "TensorFlow/Keras", "OpenCV", "MediaPipe", "Scikit-Learn"],
  },
  {
    label: "Data & Deployment",
    items: ["Pandas", "NumPy", "Streamlit", "FastAPI", "Jupyter"],
  },
  {
    label: "Concepts",
    items: ["CNNs", "Transfer Learning", "Object Detection", "Pose Estimation", "Attention Mechanisms"],
  },
]
