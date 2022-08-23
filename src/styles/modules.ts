export const ellipsis = (line: number) => `  
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const fadeIn = (y: number) => `
z-index: -100;
opacity: 0;
visibility: hidden;
transform: translateY(${y}px);
transition: 0.2s;
&.on {
  z-index: 100; 
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}
`;
