from PIL import Image

# A4 size at 300 DPI
A4_WIDTH = 2480
A4_HEIGHT = 3508

# Minimum coverage (50%)
MIN_COVERAGE = 0.3

image_files = [
    "PROGRAM 1.jpg",
    "PROGRAM 2.jpg",
    "PROGRAM 3A.jpg",
    "PROGRAM 3B.jpg"
]

pages = []

for file in image_files:
    img = Image.open(file)

    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    # Create white A4 background
    a4_page = Image.new("RGB", (A4_WIDTH, A4_HEIGHT), "white")

    # Calculate scaling factors
    scale_w = (A4_WIDTH * MIN_COVERAGE) / img.width
    scale_h = (A4_HEIGHT * MIN_COVERAGE) / img.height

    # Choose the larger scale so it covers at least half page
    scale = max(scale_w, scale_h)

    new_width = int(img.width * scale)
    new_height = int(img.height * scale)

    resized_img = img.resize((new_width, new_height), Image.LANCZOS)

    # Center image
    x = (A4_WIDTH - new_width) // 2
    y = (A4_HEIGHT - new_height) // 2

    a4_page.paste(resized_img, (x, y))

    pages.append(a4_page)

pages[0].save(
    "output1.pdf",
    save_all=True,
    append_images=pages[1:]
)

print("IMAGE converted to PDF")