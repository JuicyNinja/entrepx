-- Development seed only. Dollar amounts are SAMPLES from the mockups; set real ones in Settings.
insert into public.pricing_ranges
  (class, startup_min_cents, startup_max_cents, per_unit_cents, monthly_min_cents, monthly_max_cents,
   base_basic_cents, base_growth_cents, base_fast_track_cents, commitment_deposit_cents, option_fee_cents, extension_fee_cents)
values
  ('starter', 2500000,  6000000, 200000,  75000, 200000, 2500000, 3500000, 4200000, 250000, 150000, 50000),
  ('class_1', 4000000,  8000000, 300000, 125000, 250000, 4000000, 5000000, 6000000, 400000, 200000, 75000),
  ('class_2', 6000000, 12000000, 400000, 175000, 350000, 6000000, 7500000, 9000000, 600000, 300000, 100000),
  ('class_3', 9000000, 18000000, 500000, 250000, 500000, 9000000,11000000,13000000, 900000, 400000, 150000),
  ('class_4', 9000000, 18000000, 500000, 250000, 500000, 9000000,11000000,13000000, 900000, 400000, 150000)
on conflict (class) do nothing;
