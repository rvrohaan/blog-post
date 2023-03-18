import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(this.apiURL);
  }

  deletePost(id: number): Observable<any>{
    const url = `${this.apiURL}/${id}`
    return this.http.delete<any>(url);
  }

  createPost(post: any): Observable<any>{
    return this.http.post<Post>(this.apiURL, post);
  }

  editPost(post: any): Observable<any>{
    const url = `${this.apiURL}/${post.id}`
    return this.http.put<any>(url, post);
  }

  getPost(id: number): Observable<Post>{
    const url = `${this.apiURL}/${id}`
    return this.http.get<Post>(url);
  }
}
