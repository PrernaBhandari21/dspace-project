import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  selectedMetaTab!: any;
  pageSize = 5;
  pageIndex = 0;
  totalItems = 0;
  pagedData: any[] = [];

  allData: any[] = [
    {
        imgSrc: "http://digilib.iicdelhi.in/jspui/bitstream/123456789/17556/2/Thumbnail_TIT_01.jpg",
        Title: "1. National Geographic Maps",
    },
    {
        imgSrc: "https://img.freepik.com/free-photo/reading-concept-with-pile-books_23-2147690501.jpg?size=626&ext=jpg&ga=GA1.2.1546609238.1679454714&semt=sph",
        Title: "2. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "3. National Geographic Maps",
    },
    {
        Title: "4. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "5. National Geographic Maps",
    },
    {
        Title: "6. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "7. National Geographic Maps",
    },
    {
        Title: "8. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "9. National Geographic Maps",
    },
    {
        Title: "10. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "11. National Geographic Maps",
    },
    {
        Title: "12. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "13. National Geographic Maps",
    },
    {
        Title: "14. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "15. National Geographic Maps",
    },
    {
        Title: "16. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "17. National Geographic Maps",
    },
    {
        Title: "18. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "19. National Geographic Maps",
    },
    {
        Title: "20. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "21. National Geographic Maps",
    },
    {
        Title: "22. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "23. National Geographic Maps",
    },
    {
        Title: "24. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "25. National Geographic Maps",
    },
    {
        Title: "26. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "27. National Geographic Maps",
    },
    {
        Title: "28. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "29. National Geographic Maps",
    },
    {
        Title: "30. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "31. National Geographic Maps",
    },
    {
        Title: "32. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "33. National Geographic Maps",
    },
    {
        Title: "34. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "35. National Geographic Maps",
    },
    {
        Title: "36. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "37. National Geographic Maps",
    },
    {
        Title: "38. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "39. National Geographic Maps",
    },
    {
        Title: "40. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "41. National Geographic Maps",
    },
    {
        Title: "42. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "43. National Geographic Maps",
    },
    {
        Title: "44. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "45. National Geographic Maps",
    },
    {
        Title: "46. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "47. National Geographic Maps",
    },
    {
        Title: "48. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "49. National Geographic Maps",
    },
    {
        Title: "50. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "51. National Geographic Maps",
    },
    {
        Title: "52. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "53. National Geographic Maps",
    },
    {
        Title: "54. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "55. National Geographic Maps",
    },
    {
        Title: "56. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "57. National Geographic Maps",
    },
    {
        Title: "58. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
    {
        Title: "59. National Geographic Maps",
    },
    {
        Title: "60. Banking in the British Commonwealth",
        Author: "Ramaiya, A."
    },
];


  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.sharedService.selectedMetaTabChanged.subscribe((metaTab: string) => {
      this.selectedMetaTab = metaTab;
      this.updatePagedData();
    });
  }

  updatePagedData() {
    this.totalItems = this.allData.length;
    console.log("totalItems : ",this.totalItems);
    const startIndex = this.pageIndex * this.pageSize;
    console.log("startIndex : ",startIndex);
    const endIndex = startIndex + this.pageSize;
    console.log("endIndex : ",endIndex);
    this.pagedData = this.allData.slice(startIndex, endIndex);
    console.log("pagedData : ",this.pagedData);

  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
  }
}
