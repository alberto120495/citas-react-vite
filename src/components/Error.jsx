function Error({ children }) {
  return (
    <div className="bg-red-500 text-white text-center p-2 uppercase font-bold m-3 rounded-md">
      {children}
    </div>
  );
}

export default Error;
