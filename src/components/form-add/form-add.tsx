import { Component, Prop } from "@stencil/core";
import { MatchResults, RouterHistory } from "@stencil/router";
@Component({
  tag: "form-add",
  styleUrl: "form-add.scss"
})
export class FormAdd {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  render() {
    return (
      <section class="section">
      <div class="container">
      <div class="section-heading">
       <h2 class="title is-3"><font color="white">Ajouter une nouvelle formation</font></h2>
       
      </div>
      <br></br>
        <form-form history={this.history} is-edit-mode />
      </div>
      </section>
    );
  }
}
