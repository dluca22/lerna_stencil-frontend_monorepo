import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'rocket-card',
  styleUrl: 'rocket-card.css',
  shadow: true,
})
export class RocketCard {
  // @Prop() rocket: any;
  @Prop() name: string;
  @Prop() type: string;
  @Prop() description: string;
  @Prop() heightMeters: number;
  @Prop() heightFeet: number;
  @Prop() diameterMeters: number;
  @Prop() diameterFeet: number;
  @Prop() massKg: number;
  @Prop() massLb: number;
  @Prop() stages: number | string;
  @Prop() first_flight: string;
  @Prop() country: string;
  @Prop() company: string;
  @Prop() payload_weights: number;
  @Prop() image: string | undefined;
  
  get hasImage() {
    return this.image !== undefined;
  }

  get dataReady(){
    return !!this.name; 
  }

   fallback(value: any, defaultVal: string = '--') {
    return value !== undefined && value !== null && value !== '' ? value : defaultVal;
  }

  render() {
    if (!this.dataReady) return <p>Loading...</p>;

    return (
      <div class="card">
        {this.hasImage
          ? <img src={this.image} alt={this.name} class="rocket-image" />
          : null
        }
        <div class="card-content">
          
          <h2>{this.name}</h2>
          { this.type
            ? <small class='rocket-type'></small>
            : null
          }
          <div class="description">
            <text-snippet-expand
            text={this.description}
            maxLength={100}
             ></text-snippet-expand>
          </div>
          <ul class="specs">
            <li><strong>Height:</strong> {this.heightMeters} m ({this.heightFeet} ft)</li>
            <li><strong>Diameter:</strong> {this.diameterMeters} m ({this.diameterFeet} ft)</li>
            <li><strong>Mass:</strong> {this.massKg} kg ({this.massLb} lb)</li>
            <li><strong>Stages:</strong> {this.stages}</li>
            <li><strong>First Flight:</strong> {this.first_flight}</li>
            <li><strong>Country:</strong> {this.country}</li>
            <li><strong>Company:</strong> {this.company}</li>
          </ul>
        </div>
      </div>
    );
  }
}
