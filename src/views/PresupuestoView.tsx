import { NavigationPage } from '../types';
import QuoteFlow from '../components/QuoteFlow';

interface PresupuestoViewProps {
  initialServiceSlug?: string;
  initialOrigin?: string;
  initialDest?: string;
  initialStep?: 1 | 2 | 3;
  onStepChange?: (step: 1 | 2 | 3) => void;
  onNavigate: (page: NavigationPage, serviceSlug?: string) => void;
}

export default function PresupuestoView({
  initialServiceSlug,
  initialOrigin,
  initialDest,
  initialStep = 1,
  onStepChange,
}: PresupuestoViewProps) {
  return (
    <div className="w-full bg-white min-h-[calc(100dvh-64px)] flex flex-col justify-start">
      {/* QUOTE FLOW FORM (Distraction-free on desktop and mobile) */}
      <div className="w-full flex-1 flex flex-col">
        <QuoteFlow
          initialServiceSlug={initialServiceSlug}
          initialOrigin={initialOrigin}
          initialDest={initialDest}
          initialStep={initialStep}
          onStepChange={onStepChange}
        />
      </div>
    </div>
  );
}
