import React, { useMemo } from 'react';

function getAtsColor(score) {
    if (score >= 75) return '#16a34a'; // green
    if (score >= 50) return '#f59e0b'; // amber
    return '#ef4444';                  // red
}

export function AtsScore({
                                   score = 72,
                                   size = 160,
                                   strokeWidth = 14,
                                   label = 'ATS Score',
                                   showLabel = true,
                                   trackColor = '#e5e7eb',  // gray-200
                                   textColor = '#ffffff',   // gray-900
                                   fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif',
                                   animate = true,
                               }) {
    const clamped = Math.max(0, Math.min(100, Number.isFinite(score) ? score : 0));

    const { radius, center, circumference, dashOffset, arcColor } = useMemo(() => {
        const r = (size - strokeWidth) / 2;
        const c = size / 2;
        const circ = 2 * Math.PI * r;
        const offset = circ * (1 - clamped / 100);
        return {
            radius: r,
            center: c,
            circumference: circ,
            dashOffset: offset,
            arcColor: getAtsColor(clamped),
        };
    }, [clamped, size, strokeWidth]);

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            role="img"
            aria-label={`${label}: ${clamped}`}
            style={{ display: 'block' }}
        >
            <title>{`${label}: ${clamped}`}</title>

            {/* Background track */}
            <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={trackColor}
                strokeWidth={strokeWidth}
            />

            {/* Progress arc */}
            <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={arcColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                transform={`rotate(-90 ${center} ${center})`}
                style={{
                    transition: animate ? 'stroke-dashoffset 700ms ease, stroke 200ms ease' : undefined,
                }}
            />

            {/* Numeric score */}
            <text
                x="50%"
                y="50%"
                dy="-0.1em"
                textAnchor="middle"
                fontSize={size * 0.28}
                fontWeight="700"
                fill={textColor}
                fontFamily={fontFamily}
            >
                {clamped}
            </text>

            {/* Label */}
            {showLabel && (
                <text
                    x="50%"
                    y="50%"
                    dy={size * 0.22}
                    textAnchor="middle"
                    fontSize={size * 0.12}
                    fontWeight="500"
                    fill={textColor}
                    opacity="0.7"
                    fontFamily={fontFamily}
                >
                    {label}
                </text>
            )}
        </svg>
    );
}
export default AtsScore;
