import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Section,
  Sections,
  InfoSectionForUpdate
} from '../interfaces/section.interface';

@Injectable({ providedIn: 'root' })
export class QueriesService {
  constructor(private httpClient: HttpClient) {}

  readonly baseUrl: string =
    'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  getAllSections(): Observable<Sections> {
    return this.httpClient.get<Sections>(`${this.baseUrl}/app/api/v1/section`);
  }

  getSection(sectionName: string): Observable<Section> {
    return this.httpClient.get<Section>(
      `${this.baseUrl}/app/api/v1/section/${sectionName}`
    );
  }

  updateSection(
    sectionName: string,
    newContent: InfoSectionForUpdate,
    token: string
  ): Observable<Section> {
    return this.httpClient.put<Section>(
      `${this.baseUrl}/app/api/v1/section/${sectionName}`,
      newContent,
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) }
    );
  }
}
