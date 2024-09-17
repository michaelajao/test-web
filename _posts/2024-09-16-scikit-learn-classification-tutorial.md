---
layout: posts
title:  "Scikit-Learn Classification with Python: A Beginner's Tutorial"
date:   2024-09-16 12:45:08 +0100
author_profile: true
author: Michael Ajao-Olarinoye
categories: blog
tags: [machine learning, python, education]
description: "A beginner-friendly guide to using Scikit-Learn for classification tasks in Python, with code examples."
highlight_home: true
header:
  teaser: https://images.unsplash.com/photo-1557562645-4eee56b29bc1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  overlay_image: https://images.unsplash.com/photo-1557562645-4eee56b29bc1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  overlay_filter: 0.5
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

Welcome to this tutorial on **Scikit-Learn** for machine learning classification tasks. Scikit-Learn is one of the most widely used libraries in Python for machine learning. It provides simple and efficient tools for data mining and data analysis. In this tutorial, you'll learn how to perform classification using Python and the Scikit-Learn library.

## What is Classification?

Classification is a supervised learning technique used to predict categorical labels (such as yes/no, spam/not spam) based on input features. Scikit-Learn offers a wide range of classification algorithms, such as:
- Logistic Regression
- Support Vector Machines (SVM)
- Decision Trees
- Random Forests
- K-Nearest Neighbors (KNN)

In this tutorial, we will use the **Iris dataset** and apply the **Random Forest Classifier** to demonstrate the classification process.

## Setting Up the Environment

Before you start, make sure you have Scikit-Learn and other required libraries installed:

```bash
pip install scikit-learn matplotlib pandas
```
Once the installation is complete, let's start by importing the necessary libraries.

## import the necessary libraries

```python
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt
```

## Load the Iris dataset

The Iris dataset is a famous dataset in machine learning and is often used for classification examples. It contains 150 samples of iris flowers with four features: sepal length, sepal width, petal length, and petal width.

```python
# Load the Iris dataset
iris = load_iris()
X = iris.data  # Features
y = iris.target  # Labels

# Check the shape of the dataset
print("Feature shape:", X.shape)
print("Label shape:", y.shape)
```

## Split the dataset into training and testing sets

To train a machine learning model, we need to split the data into training and testing sets.

```python
# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

print("Training data shape:", X_train.shape)
print("Test data shape:", X_test.shape)
```

## Train the Random Forest Classifier

Now, we'll train a Random **Forest Classifier** on the Iris dataset. The Random Forest algorithm is an ensemble learning method that builds multiple decision trees and merges them together to get a more accurate and stable prediction.

```python
# Initialize the classifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)

# Train the model
clf.fit(X_train, y_train)

# Make predictions on the test set
y_pred = clf.predict(X_test)
```

## Evaluate the model

After training the model, it's essential to evaluate its performance. We can use accuracy score and classification report for this.

```python
# Calculate the accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")

# Print a detailed classification report
print(classification_report(y_test, y_pred, target_names=iris.target_names))
```

## Visualize the results

Finally, let's visualize the results using a confusion matrix.

```python
from sklearn.metrics import plot_confusion_matrix

# Plot the confusion matrix
plot_confusion_matrix(clf, X_test, y_test, display_labels=iris.target_names, cmap=plt.cm.Blues)
plt.title("Confusion Matrix")
plt.show()
```

## Visualizing Feature Importance

Random Forest Classifiers provide feature importance scores that indicate how important each feature is for making decisions. Let's visualize the feature importance scores.

```python
# Get feature importance
importances = clf.feature_importances_
feature_names = iris.feature_names

# Create a bar chart
plt.figure(figsize=(8, 6))
plt.barh(feature_names, importances, color='green')
plt.xlabel('Feature Importance')
plt.title('Feature Importance in Random Forest Classifier')
plt.show()

```
The bar chart will give you a visual representation of which features are most important in predicting the species of Iris flowers.

## Conclusion

In this tutorial, we covered the basics of using Scikit-Learn for classification tasks. We used the Iris dataset and applied a Random Forest Classifier to classify different species of Iris flowers. We also explored how to evaluate the model and visualize feature importance. Feel free to explore other classifiers and datasets to deepen your understanding of machine learning!