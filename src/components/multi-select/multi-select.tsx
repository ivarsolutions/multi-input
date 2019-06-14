import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'multi-select',
  styleUrl: 'multi-select.css',
  shadow: true
})
export class MultiSelect {
 
   @Prop() id: string;

   render() {
     return (
       <p>
         <input type="text" id={this.id}/>
       </p>
     );
   }
}
