export interface IRocket {
  height: IMeasurement;
  diameter: IMeasurement;
  mass: IMass;
  first_stage: IStage;
  second_stage: IStageWithPayloads;
  engines: IEngine;
  landing_legs: ILandingLegs;
  payload_weights: IPayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}

interface IMeasurement {
  meters: number;
  feet: number;
}

interface IMass {
  kg: number;
  lb: number;
}

interface IThrust {
  kN: number;
  lbf: number;
}

interface IStage {
  thrust_sea_level: IThrust;
  thrust_vacuum: IThrust;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}

interface IPayloadFairing {
  height: IMeasurement;
  diameter: IMeasurement;
}

interface IStageWithPayloads {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust: IThrust;
  payloads: {
    composite_fairing: IPayloadFairing;
    option_1: string;
  };
}

interface IEngine {
  isp: {
    sea_level: number;
    vacuum: number;
  };
  thrust_sea_level: IThrust;
  thrust_vacuum: IThrust;
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
}

interface ILandingLegs {
  number: number;
  material: string | null;
}

interface IPayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}
