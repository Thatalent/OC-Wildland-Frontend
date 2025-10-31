import { useQuery } from '@apollo/client'
import { GET_KPI_STATS } from '../graphql/queries'

export type KPIStatItem = {
  label: string
  value: number | string
  suffix?: string
  prefix?: string
  ariaValue?: string
}


// Data shape coming from CMS
interface KPIFromCMS {
  id: string
  name: string
  groupsTrained: number
  clientSatisfaction: number
  yearsOfExperience: number
  trainedFirefighters: number
  successRate: number
  updatedAt: string
}

type KPIPattern = 'customTraining' | 'homepage' | 'about'

type KPIStatsProps = {
  pattern: KPIPattern
  className?: string
}

// Main KPIStats component - only fetches from CMS with predefined patterns
export function KPIStats({ pattern, className }: KPIStatsProps) {
  const { loading, error, data } = useQuery(GET_KPI_STATS)

  if (loading) return <div role="status" aria-live="polite">Loading statistics...</div>
  if (error) return <div role="alert">Error loading statistics</div>

  const stats = (data?.kpiStatistics?.[0] ?? null) as KPIFromCMS | null
  if (!stats) return null


  const getKPIItems = (pattern: KPIPattern): KPIStatItem[] => {
    switch (pattern) {
      case 'customTraining':
        return [
          { label: 'Groups Trained', value: stats.groupsTrained, suffix: '+' },
          { label: 'Client Satisfaction', value: stats.clientSatisfaction, suffix: '%' },
          { label: 'Years of Experience', value: stats.yearsOfExperience },
        ]
      case 'homepage':
      case 'about':
        return [
          { label: 'Trained Firefighters', value: stats.trainedFirefighters, suffix: '+' },
          { label: 'Success Rate', value: stats.successRate, suffix: '%' },
          { label: 'Years of Experience', value: stats.yearsOfExperience },
        ]
      default:
        return []
    }
  }

  const kpiItems = getKPIItems(pattern)

  // Set section background for about page only, others default to white
  const sectionBackgroundClass = pattern === 'about' ? 'bg-[rgba(241,245,249,0.5)]' : 'bg-white'

  return (
    <section className={`py-12 ${sectionBackgroundClass} ${className ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="mt-2 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
          {kpiItems.map(({ label, value, prefix, suffix, ariaValue }) => (
            <div key={label} className="px-4 py-6 text-center">
              <dd className="m-0 text-3xl font-semibold tracking-tight text-[rgb(243,78,27)]">
                <span aria-label={ariaValue}>
                  {prefix}
                  {typeof value === 'number' ? value.toLocaleString() : value}
                  {suffix}
                </span>
              </dd>
              <dt className="mt-2 text-[15px] font-medium text-gray-500">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

