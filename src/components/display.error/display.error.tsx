type DisplayErrorProps = {
  message: string;
  details?: string;
};

const DisplayError: React.FC<DisplayErrorProps> = ({ message, details }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-4">
      <div className="bg-red-500 text-white text-center p-4 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Error</h1>
        <p className="mb-2">{message}</p>
        {details && <p className="text-sm text-red-200">{details}</p>}
      </div>
    </div>
  );
};

export default DisplayError;
