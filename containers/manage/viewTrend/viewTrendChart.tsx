'use client';

import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { ArticleViewTrendsItem } from '../../../types/api/article';
import { getArticleViewTrends } from '../../../services/article';

export default function ViewTrendChart() {
  const CHART_DURATION = 15;
  const [viewTrends, setViewTrends] = useState<ArticleViewTrendsItem[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchViewTrends = async () => {
      const viewTrendsResponse = await getArticleViewTrends(CHART_DURATION);
      setViewTrends(viewTrendsResponse.viewTrends);
    };
    fetchViewTrends();
  }, []);

  useEffect(() => {
    let chart: Chart | null = null;

    const initializeChart = () => {
      const ctx = canvasRef.current;
      if (ctx) {
        if (chart) chart.destroy();

        chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: viewTrends.map((item) => {
              const date = new Date(item.date);
              return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
            }),
            datasets: [
              {
                label: '조회수',
                data: viewTrends.map((item) => item.viewCount),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
              },
            ],
          },
        });
      }
    };

    if (viewTrends.length) {
      initializeChart();
    }

    return () => {
      if (chart) {
        chart.destroy(); // 컴포넌트 언마운트 시 차트 제거
      }
    };
  }, [viewTrends]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}
