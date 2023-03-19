export const checkIfImageExists = (url: string) => {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    return url;
  } else {
    img.onload = () => {
      return url;
    };
    img.onerror = () => {
      return undefined;
    };
  }
};