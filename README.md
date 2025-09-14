⏱ Coding Hours Forecaster

This project predicts and analyzes students’ coding hours using machine learning techniques. By modeling study activity, it uncovers productivity patterns and provides insights that can help with personalized study planning, workload management, and data-driven academic decisions.

📂 Dataset

The dataset (can be expanded/customized) includes:

Student ID / Profile Data

Daily Coding Hours (0–12)

Study Sessions (per day)

Break Duration (minutes)

Course/Subject Load

⚙️ Methodology

Data Cleaning: Handling missing values, scaling numerical features, and encoding categorical data.

Forecasting Models:

Linear Regression for baseline predictions.

Time Series models (ARIMA/Prophet) for temporal coding-hour trends.

Machine Learning models (Random Forest, XGBoost) for advanced forecasting.

Evaluation Metrics: MAE, RMSE, and R² score.

Visualization: Time series plots, bar charts of coding hours, and trend comparison across students.

📊 Results

Baseline regression provides reasonable estimates for coding hours.

Time series forecasting captures weekly coding fluctuations.

Visualization reveals coding peaks before exams/assignments.

Model insights help in study scheduling and productivity improvement.

📌 Requirements

Python 3.9+

Pandas, NumPy, Matplotlib, Seaborn

scikit-learn

statsmodels / Prophet (for time series)

👉 All dependencies can be installed via requirements.txt.

📝 License

This project is developed for academic purposes.
Free to use with proper attribution.
