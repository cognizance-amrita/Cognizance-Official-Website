# Sample Linear Regression Program

**Goal:** Use **Linear** **Regression** to predict student marks based
on hours studied.
---

📁 **1.** Read the Dataset

Use **pandas** to load the dataset (assume the file is named
student_scores.csv ).

> import pandas as pd
>
> \# Load the CSV file
>
> df = pd.read_csv("student_scores.csv")

📝 **Explanation:**

We use pandas.read_csv() to load the dataset. The data should have two
columns: Hours and Marks .

🧮 **2.** Split Data into Features (X) and Target (y)

> \# Split the dataset
>
> X = df\[\['Hours'\]\] \# Features (2D array for sklearn) y =
> df\['Marks'\] \# Target values (1D array)

📝 **Explanation:**

We separate the independent variable (Hours studied) and the dependent
variable (Marks scored). X must be 2D, hence we use double brackets.

🧠 **3.** Train a Linear Regression Model

> from sklearn.linear_model import LinearRegression
>
> \# Create the model
>
> model = LinearRegression()
>
> \# Fit the model with the data model.fit(X, y)

📝 **Explanation:**

We import LinearRegression from sklearn.linear_model and fit the model
using X and y .

🔮 **4.** Predict Marks

> \# Predict for 6 hours of study predicted_marks =
> model.predict(\[\[4\]\])
>
> print(f"Predicted Marks for 6 hours of study:
> {predicted_marks\[0\]:.2f}")

📝 **Explanation:**

We pass the input in double brackets \[\[4\]\] because the model expects
a 2D array as input for prediction.

📊 **5.** (Optional) Evaluate the Model with R² Score

Visit
[<u>https://scikit-learn.org/stable/modules/</u>g<u>enerated/sklearn.metrics.r2_score.html</u>](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html)
to know more about *R*2 Score

> from sklearn.metrics import r2_score
>
> \# Predict marks for all X to get predicted y values y_pred =
> model.predict(X)
>
> \# Calculate R² Score
>
> r2 =
>
> print(f"Model Accuracy (R² Score): {r2:.2f}")

📝 **Explanation:**

The R² score tells us how well the regression line fits the actual data.
A value closer to 1 indicates better accuracy.

🏠 New ML Task: House Rent Prediction Using Linear Regression

🎯 Objective

Build and train a Linear Regression model to **predict** **house**
**rent** **based** **on** **house** **size** **(in** **square**
**feet)** using a synthetic dataset.

📘 Scenario

You are a data analyst for a rental agency. They want to automate rental
price estimation based on the **size** **of** **a** **house**
**(sq.ft)**. Using historical data of house sizes and their
corresponding monthly rents, help build a prediction system to estimate
rent for a new property.

🧪 Task Instructions: House Rent Prediction

> 1\. Load the dataset from the provided CSV file using pandas. 2. Split
> the dataset into:
>
> X : House size in square feet y : Monthly rent in INR
>
> 3\. Train a Linear Regression model using
> sklearn.linear_model.LinearRegression .
>
> 4\. Predict the rent for a house with **1200** **sqft** area.
>
> 5\. Visualize the data and the regression line using a scatter plot.
> 6. Highlight the predicted rent point on the plot.
>
> 7\. (Optional) Calculate the model's accuracy using **R²** **Score**.
>
> 8\. Submit your code/script and predicted rent output for 5000 square
> feet.
>
> 9\. Answer this reflection question:
>
> What other features could improve this rent prediction model?
