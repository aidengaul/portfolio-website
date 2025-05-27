export default function MultiClassImageClassification() { 
    return (
       <div className="w-full h-full bg-white p-4 overflow-auto text-xl">
            <h1 className="text-4xl">Multi Class Image Classification Model</h1>
            <p>
                <a href="https://drive.google.com/file/d/1i5zK8WRzUBYvwC2dE4fqmaFu3xNjMuU7/view?usp=drive_link" target="_blank" className="hover:text-blue-400">Jupyter Link (Google Drive)</a>
            </p>
            <br />

            <h2 className="text-3xl">Technical Stack</h2>
            <ul className="list-disc pl-5">
                <li>Python</li>
                <li>TensorFlow</li>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>PyTorch</li>
            </ul>
            <br />

            <h2 className="text-3xl">About the Project</h2>
            <p className="max-w-4xl">
                This project is a multi-class image classification model that I built as part of a machine learning course at the University of Florida.
                The model is designed to classify images into one of the following 12 categories: chair, pen, laptop, desk, water bottle, backpack, book, phone, clock, calculator, keychain, or paper. 
                The total aggregated dataset contains 4,757 128x128 images, with each category containing roughly the same number of images.
                <br/>
                <br/>
                I implemented a full pipeline for the model, including data preprocessing, model training, and evaluation.
                The data preprocessing step involves loading the images, resizing them to 128x128 pixels, and normalizing the pixel values to be between 0 and 1.
                I then performed a stratified split of the dataset into training, validation, and test sets to ensure that the model is trained on a representative sample of the data.
                <br />
                <br />
                As for the model architecture, I attempted to mimic the AlexNet convolutional neural network architecture with a few modifications to reduce training time. 
                The model consists of 5 convolutional layers, each followed by a max pooling layer, and 3 fully connected layers at the end.
                Each layer is then passed into the ReLU activation function - except the output layer, which uses the softmax activation function to produce a probability distribution over the 12 classes.
                <br />
                <br />
                Throughout the training process, I systematically adjusted the learning rate, dropout rates, and batch size to optimize the model's performance.
                The model achieved a final accuracy of ~80% on the test set, demonstrating its effectiveness in classifying images into the specified categories.
                As part of the evaluation, I also generated a confusion matrix to visualize the model's performance across different classes, which helped identify performance differences across categories.
            </p>
            <br />
        </div>
    )
}