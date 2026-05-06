type WorkExperienceProps = {
  startDate: string;
  endDate: string;
  role: string;
  description: string[];
  companylogoURL?: string;
};

export default function WorkExperience({ startDate, endDate, role, description, companylogoURL }: WorkExperienceProps) {
  return (
    <div className="flex flex-col md:flex-row mt-5 mb-5">
      <div className="mr-8 text-lg text-stone-600 dark:text-stone-400 w-50 shrink-0">
        {startDate}{"-"}{endDate}
      </div>
      <div className="flex flex-col">
        <p className="text-lg mb-1">{role}</p>
        <ul className="list-disc list-outside pl-4 text-base space-y-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}