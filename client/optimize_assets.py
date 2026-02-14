
import os
import glob
from pathlib import Path
import sys

# Try to import Pillow, if not found, ask user to install
try:
    from PIL import Image
except ImportError:
    print("Error: The 'Pillow' library is required to process images.")
    print("Please run: pip install Pillow")
    sys.exit(1)

# Configuration
ASSETS_DIR = Path("public/assets")
CLIP_FOLDERS = ["Clip 1", "Clip 2", "Clip 3", "Clip 4"]
TARGET_HEIGHT = 540
QUALITY = 80  # WebP quality

def optimize_images():
    if not ASSETS_DIR.exists():
        print(f"Error: Assets directory '{ASSETS_DIR}' not found. Make sure you are running this from the 'client' directory.")
        return

    print(f"Starting optimization process...")
    print(f"Target Height: {TARGET_HEIGHT}px")
    print(f"Quality: {QUALITY}")
    print("-" * 50)

    for folder_name in CLIP_FOLDERS:
        source_dir = ASSETS_DIR / folder_name
        
        # Determine mobile folder name (e.g., "Clip 1-mobile")
        mobile_folder_name = f"{folder_name}-mobile"
        target_dir = ASSETS_DIR / mobile_folder_name

        if not source_dir.exists():
            print(f"Skipping {folder_name}: Directory not found.")
            continue

        # Create target directory if it doesn't exist
        os.makedirs(target_dir, exist_ok=True)
        print(f"Processing: {folder_name} -> {mobile_folder_name}")

        # Get all webp images
        images = sorted(list(source_dir.glob("*.webp")))
        
        if not images:
            print(f"  No .webp images found in {folder_name}")
            continue

        count = 0
        total = len(images)

        for img_path in images:
            try:
                # Open image
                with Image.open(img_path) as img:
                    # Calculate new width to maintain aspect ratio
                    aspect_ratio = img.width / img.height
                    new_width = int(TARGET_HEIGHT * aspect_ratio)
                    
                    # Resize using LANCZOS for high quality downsampling
                    resized_img = img.resize((new_width, TARGET_HEIGHT), Image.Resampling.LANCZOS)
                    
                    # Save to target directory
                    target_path = target_dir / img_path.name
                    resized_img.save(target_path, "WEBP", quality=QUALITY)
                    
                    count += 1
                    # Simple progress indicator
                    if count % 10 == 0:
                        print(f"  Processed {count}/{total} images...", end="\r")
            
            except Exception as e:
                print(f"  Error processing {img_path.name}: {e}")

        print(f"  Completed {count}/{total} images for {folder_name}")
        print("-" * 50)

    print("Optimization Complete!")

if __name__ == "__main__":
    optimize_images()
