const addImageUpload = (types, fileChooser, preview, insertMode) => {

  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = types.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader;

      reader.addEventListener('load', () => {
        if (insertMode === 'withBackground') {
          preview.style.background = `#e4e4de center / contain no-repeat url(${reader.result})`;
        } else {
          preview.style.height = 'auto';
          preview.src = reader.result;
        };
      });

      reader.readAsDataURL(file);
    }
  });
};

export {addImageUpload};
