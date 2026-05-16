'use client';

import { useId } from 'react';

export const TRADE_OPTIONS = [
  'Plumber',
  'Heating engineer',
  'Gas engineer',
  'Bathroom fitter',
  'Multi-trade',
  'Other trade',
] as const;

export type TradeType = (typeof TRADE_OPTIONS)[number];

interface Props {
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  name?: string;
}

export default function TradeTypeField({ value, onChange, error, required = true, name = 'trade_type' }: Props) {
  const groupId = useId();
  const labelId = `${groupId}-label`;
  const errorId = `${groupId}-error`;

  return (
    <div>
      <span id={labelId} className="block text-sm font-medium text-navy-card mb-3">
        Trade type {required && <span className="text-amber" aria-hidden="true">*</span>}
      </span>

      {/* Mobile: native select */}
      <div className="md:hidden">
        <label htmlFor={`${groupId}-select`} className="sr-only">
          Trade type
        </label>
        <select
          id={`${groupId}-select`}
          name={name}
          required={required}
          value={value}
          onChange={e => onChange(e.target.value)}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={!!error}
          className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all text-navy-card"
        >
          <option value="" disabled>
            Select your trade
          </option>
          {TRADE_OPTIONS.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: 3x2 radio card grid */}
      <div
        role="radiogroup"
        aria-labelledby={labelId}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        className="hidden md:grid grid-cols-3 gap-3"
      >
        {TRADE_OPTIONS.map(opt => {
          const checked = value === opt;
          const id = `${groupId}-${opt.replace(/\s+/g, '-').toLowerCase()}`;
          return (
            <label
              key={opt}
              htmlFor={id}
              className={`relative flex items-center justify-center text-center px-3 py-3 rounded-lg border-2 cursor-pointer transition-all text-sm font-medium select-none ${
                checked
                  ? 'border-amber bg-amber/10 text-navy-dark shadow-sm'
                  : 'border-slate-blue/25 bg-light-gray text-navy-card hover:border-amber/60'
              }`}
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={opt}
                checked={checked}
                onChange={() => onChange(opt)}
                required={required && !value}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>

      {error && (
        <p id={errorId} className="mt-2 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
