import Card from "@/components/custom/card/card";
import { GitHubCalendar } from 'react-github-calendar'

const GithubHeatmap = () => {
  const selectShownData = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Card title="Github" className="bg-tertiary">
      <div className="github-calendar-wrapper">
        <div className="github-calendar-inner">
          <GitHubCalendar
            username="formofshred"
            fontSize={12}
            transformData={selectShownData}
          />
        </div>
      </div>
    </Card>
  )
}

export default GithubHeatmap;