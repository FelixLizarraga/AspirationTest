import { fireEvent, render, screen } from '@testing-library/react';
import Topics from './Topics';

describe("<Topics />", () => {
  test('btn-change',() =>{
    render(<Topics />);


    const btnChange = screen.getByTestId("btn-change");
    expect(screen.getByTestId("btn-change")).toHaveTextContent("Open relationed topics")

    fireEvent.click(btnChange);

    expect(screen.getByTestId("btn-change")).toHaveTextContent("Close relationed topics")
  })

  test('should renderize topics', ()=>{
    const relatedTopics = [
            {
                "id": "MDU6VG9waWNyZWFjdA==",
                "name": "react",
                "stargazerCount": 74020
            },
            {
                "id": "MDU6VG9waWN2dWU=",
                "name": "vue",
                "stargazerCount": 49084
            },
            {
                "id": "MDU6VG9waWNhbmRyb2lk",
                "name": "android",
                "stargazerCount": 100418
            },
            {
                "id": "MDU6VG9waWNncmFwaHFs",
                "name": "graphql",
                "stargazerCount": 20334
            },
            {
                "id": "MDU6VG9waWNqYXZh",
                "name": "java",
                "stargazerCount": 116340
            },
            {
                "id": "MDU6VG9waWNjcm9zcy1wbGF0Zm9ybQ==",
                "name": "cross-platform",
                "stargazerCount": 110
            }
        ]



    render(<Topics relatedTopics={relatedTopics} />)


    const btnChange = screen.getByTestId("btn-change");
    fireEvent.click(btnChange);


    expect(screen.getByTestId("span")).toBeInTheDocument()
  }) 
})