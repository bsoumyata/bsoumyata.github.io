import os

path_to_folder = "/Users/samjain/Desktop/samarthjain.me-latest/images/best_photos/"

all_files = os.listdir(path_to_folder)

all_files = [i for i in all_files if "jpg" in i]
print(all_files)

print(path_to_folder+all_files[0])
for file in all_files:
	print(file, ": ")
	os.system("magick convert %s -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB %s" % (path_to_folder+file, path_to_folder+file))
# os.system(bashCommand)