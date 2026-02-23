# import fitz  # PyMuPDF

# # Open the PDF file
# pdf_path = "linked list.pdf"
# doc = fitz.open(pdf_path)

# # Loop through each page
# for page_number in range(len(doc)):
#     page = doc[page_number]
    
#     # Convert page to image
#     pix = page.get_pixmap()
    
#     # Save image
#     image_name = f"page_{page_number + 1}.png"
#     pix.save(image_name)
    
#     print(f"Saved {image_name}")

# doc.close()
# print("Conversion completed successfully!")
import fitz  # PyMuPDF
import os

# ---------------- CLASS ----------------
class PDFtoImageConverter:
    def __init__(self, pdf_path, output_folder):
        self.pdf_path = pdf_path
        self.output_folder = output_folder
        os.makedirs(self.output_folder, exist_ok=True)

    def convert(self):
        try:
            doc = fitz.open(self.pdf_path)
            for page_number in range(len(doc)):
                page = doc[page_number]
                pix = page.get_pixmap()
                image_name = os.path.join(self.output_folder, f"page_{page_number + 1}.png")
                pix.save(image_name)
                print(f"Saved: {image_name}")
            doc.close()
            print("\nConversion completed successfully!")
        except Exception as e:
            print("Error:", e)

# ---------------- MENU ----------------
def menu():
    while True:
        print("\n--- PDF → IMAGE CONVERTER ---")
        print("1. Convert PDF to Images")
        print("2. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            pdf_path = input("Enter PDF file path (with extension, e.g., file.pdf): ")
            output_folder = input("Enter folder name to save images: ")
            converter = PDFtoImageConverter(pdf_path, output_folder)
            converter.convert()

        elif choice == "2":
            print("Exiting program...")
            break
        else:
            print("Invalid choice! Try again.")

# ---------------- MAIN ----------------
if __name__ == "__main__":
    menu()