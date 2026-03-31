"""
data-parser project README.md

A data parser library written in Python.
"""

__author__ = "Your Name"
__email__ = "your_email@example.com"
__version__ = "1.0.0"
__license__ = "MIT License"

import setuptools

with open("README.md", "r") as f:
    long_description = f.read()

setuptools.setup(
    name="data-parser",
    version=__version__,
    author=__author__,
    author_email=__email__,
    license=__license__,
    description="A data parser library",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/your_username/data-parser",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    install_requires=[
        "pandas",
        "numpy",
    ],
    python_requires=">=3.6",
)