import numpy as np
import pandas as pd

# Function to generate synthetic data
def generate_data(num_samples):
    np.random.seed(0)  # For reproducibility

    # Generate initial masses uniformly between 1 and 100
    initial_masses = np.random.uniform(1, 100, num_samples)

    # Generate time data
    t_max = 100
    delta_t = 1
    time = np.arange(0, t_max, delta_t)

    # Generate masses data
    masses_data = []
    for initial_mass in initial_masses:
        masses_bh = initial_mass * np.exp(-0.1 * time)
        masses_data.append(masses_bh)

    # Create a DataFrame to store the generated data
    df = pd.DataFrame(data=masses_data, columns=[f"time_{t}" for t in time])
    df['Initial_Mass'] = initial_masses

    return df

# Generate synthetic dataset with 100 samples
dataset = generate_data(100)

# Save the dataset to a CSV file
dataset.to_csv('synthetic_dataset.csv', index=False)

print("Dataset generated and saved as synthetic_dataset.csv")
