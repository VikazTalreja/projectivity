const getRandomColor = () => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    // Add more valid Tailwind CSS color classes as needed
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default getRandomColor;
