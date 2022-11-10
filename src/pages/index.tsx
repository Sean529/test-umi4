import { showToast } from '@/utils'
import './index.less'

export default function HomePage() {
  showToast('hello world')
  return (
    <div className="toast btn-primary">
      hello world
    </div>
  )
}
