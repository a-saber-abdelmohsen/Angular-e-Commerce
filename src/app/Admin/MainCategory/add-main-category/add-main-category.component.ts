import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageUploaderService } from 'src/app/Services/image-uploader.service';
import { MainCategoryService } from 'src/app/Services/main-category.service';
import { FormMain_Cat } from 'src/app/Shared/FormMain_Cat';
import { Main_Category } from 'src/app/Shared/Main_Category';

@Component({
  selector: 'app-add-main-category',
  templateUrl: './add-main-category.component.html',
  styleUrls: ['./add-main-category.component.scss']
})
export class AddMainCategoryComponent implements OnInit {

  main_Cats: Main_Category[] =[];
  selectedPhoto!: File;
  url: string = 'http://localhost:9602/api/Main_Category';
  constructor(
    private _Main_catService: MainCategoryService,
    private _imageUploader: ImageUploaderService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(data: FormMain_Cat) {
    data.imageFile = this.selectedPhoto;
    console.log(data);
    this._Main_catService.PostMain_Cat(data).subscribe(
      (data) => this._router.navigate(["/admin/MainCategory"]).then(()=>{window.location.reload()}),
      err => console.log(err)
    )
    
  }

  UploadImage(): void {
    let input = document.getElementById('imageFile')! as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedPhoto = input.files[0];
      let image = input.files[0];
      this._imageUploader
        .Upload(image)
        .subscribe(
          (d) => ((document.getElementById('img')! as HTMLImageElement).src = d)
        );
    }
  }

}
