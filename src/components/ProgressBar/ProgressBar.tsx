interface Props {
  progress: number;
}

export const ProgressBar = (props: Props) => {
  const validProgress = Math.min(Math.max(props.progress, 0), 100);

  return (
    <div className="w-full rounded-full bg-successLight h-6">
      <span
        className="flex justify-end items-center h-full rounded-full bg-successSemiDark transition-all duration-200 ease-in-out"
        style={{
          width: `${validProgress}%`,
        }}
      >
        {/* Show progress value on for values from 10 and above to avoid issues with the text not fitting */}
        {/* We also could've just moved the progress text on the top right corner as most progress bars do */}
        {validProgress >= 10 ? (
          <span className="text-white font-semibold px-4">{validProgress}%</span>
        ) : (
          // Show the progress value for screen readers when the progress is less than 10
          <span className="sr-only">{validProgress}%</span>
        )}
      </span>
    </div>
  );
};
