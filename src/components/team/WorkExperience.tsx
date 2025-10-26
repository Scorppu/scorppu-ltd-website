type WorkExperienceProps = {
  startDate: string 
  endDate: string
  role: string
  description: string
  companylogoURL?: string
};

export default function WorkExperience({startDate, endDate, role, description, companylogoURL} : WorkExperienceProps) {
  return (
    <div className="flex flex-row mt-5 mb-5">
      <div className="mr-8 text-lg text-stone-600 w-50 shrink-0">
        {startDate}{"-"}{endDate}
      </div>
      <div className="flex flex-col item">
        <p className="text-lg mb-1">{role}</p>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}