function importAll(r) {
    return r.keys().map(r); // Maps and imports all files
  }
  
  const galleryImages = importAll(
    require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/)
  );
  
  export default galleryImages;
  