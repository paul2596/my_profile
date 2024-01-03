import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vinitpaul-github-io';

  buttons = ['Pinned Projects', 'All Projects', 'Exploratory Data Analysis', 'Visualization', 'Machine Learning','Deep Learning','Image Processing'];
  selectedButton = 'Pinned Projects';
  selectedTabButton = 'Masters'
  imagePath: string = '/assets/profile-img.jpg';
  runningImagePath: string = '/assets/running.jpeg';
  bingeImagePath:string = '/assets/binge-watching.png';
  gamingImagePath:string = '/assets/gaming-icon.png';
  booksImagePath:string = '/assets/books-icon.png';

  pythonImagePath:string = '/assets/python-icon.png';
  javaImagePath:string = '/assets/java-icon.png';
  javascriptImagePath:string = '/assets/javascript-icon.png';
  powerbiImagePath:string = '/assets/powerbi-icon.png';
  angularImagePath:string = '/assets/angular-icon.png';
  gitImagePath:string = '/assets/git-icon.png';
  tensorflowImagePath:string = '/assets/tensorflow-icon.png';
  htmlflowImagePath:string = '/assets/html-icon.png';
  cssImagePath:string = '/assets/css-icon.png';
  scikitlearnImagePath:string = '/assets/scikit-learn-icon.jpg';
  matplotlibImagePath:string = '/assets/matplotlib-icon.png';
  rImagePath:string = '/assets/r-icon.png';
  pysparkImagePath:string = '/assets/py-spark-icon.jpg';
  postgresqlImagePath:string = '/assets/postgresql-icon.png';
  tableauImagePath:string = '/assets/tableau-icon.png';
  flaskImagePath:string = '/assets/flask-icon.png';

  gitimagePath:string = '/assets/github-icon.png';
  linkedinmagePath:string = '/assets/linkedin-icon.png';



  selectButton(button: string) {
    this.selectedButton = button;
  }
  selectTab(tabButton: string){
    this.selectedTabButton = tabButton;
  }

  showMoreTurbineItems = false;
  toggleTurbineItems() {
    this.showMoreTurbineItems = !this.showMoreTurbineItems;
  }
  showMoreVizItems = false;
  toggleVizItems() {
    this.showMoreVizItems = !this.showMoreVizItems;
  }
  showMoreHackathonItems = false;
  toggleHackathonItems() {
    this.showMoreHackathonItems = !this.showMoreHackathonItems;
  }


}
