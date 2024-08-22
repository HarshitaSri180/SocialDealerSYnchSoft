
export const formatCategoryName = (name) => {
  return name
    .toLowerCase()       
    .replace(/\s+/g, '-') 
    .replace(/[^\w\-]+/g, '') 
    .replace(/--+/g, '-')  
    .trim();              
};