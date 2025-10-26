import { useQuery } from '@apollo/client';
import { GET_KPI_STATS } from '../graphql/queries';

interface KPIStat {
  id: string;
  name: string;
  groupsTrained: number;
  clientSatisfaction: number;
  yearsOfExperience: number;
  trainedFirefighters: number;
  successRate: number;
  updatedAt: string;
}

export const KPIStats = () => {
  const { loading, error, data } = useQuery(GET_KPI_STATS);

  if (loading) return <div role="status" aria-live="polite">Loading statistics...</div>;
  if (error) return <div role="alert">Error loading statistics</div>;

  const stats = data?.kpiStatistics[0] as KPIStat;

  if (!stats) return null;

  const statItems = [
    { label: 'Groups Trained', value: stats.groupsTrained, suffix: '+' },
    { label: 'Client Satisfaction', value: stats.clientSatisfaction, suffix: '%' },
    { label: 'Years of Experience', value: stats.yearsOfExperience, suffix: '' },
    { label: 'Trained Firefighters', value: stats.trainedFirefighters, suffix: '+' },
    { label: 'Success Rate', value: stats.successRate, suffix: '%' },
  ];

  return (
    <section className="py-12 bg-white" aria-labelledby="kpi-stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="kpi-stats-heading"
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Our Track Record
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Key performance indicators that showcase our commitment to excellence
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {statItems.map(({ label, value, suffix }) => (
            <div
              key={label}
              className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
            >
              <dt className="text-sm font-medium text-gray-500 truncate">
                {label}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                {value.toLocaleString()}{suffix}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Last updated: {new Date(stats.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};
