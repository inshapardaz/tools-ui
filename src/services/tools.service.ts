import ApiService from "@/services/ApiService";
import {SignInResponse} from "@/@types/auth";

export const ToolsService = {
  async downloadChughtaiBook(bookUrl: string, sessionId: string, convertToPdf: Boolean): Promise<Blob> {
    const res = await ApiService.fetchData<{ BookUrl: string, SessionId: string, ConvertToPdf: Boolean }, Blob>({
      url: '/tools/chughtaidownload',
      method: 'POST',
      responseType: 'blob',
      data: {
        BookUrl: bookUrl,
        SessionId: sessionId,
        ConvertToPdf: convertToPdf
      }
    })
    const href = URL.createObjectURL(res.data);

    const link = document.createElement('a');
    link.href = href;
    
    const contentDisposition = res.headers['content-disposition'];
    const filename = contentDisposition.match(/filename=(?<filename>[^,;]+);/)[0]; 
    link.setAttribute('download', filename ?? 'download.pdf');
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    return res.data;
  },
  async downloadRekhtaBook(bookUrl: string, convertToPdf: Boolean): Promise<Blob> {
    const res = await ApiService.fetchData<{ BookUrl: string, ConvertToPdf: Boolean }, Blob>({
      url: '/tools/rekhtadownload',
      method: 'POST',
      responseType: 'blob',
      data: {
        BookUrl: bookUrl,
        ConvertToPdf: convertToPdf
      }
    })

    const href = URL.createObjectURL(res.data);

    const link = document.createElement('a');
    link.href = href;
    
    const contentDisposition = res.headers['content-disposition'];
    const filename = contentDisposition.match(/filename=(?<filename>[^,;]+);/)[0]; 
    link.setAttribute('download', filename ?? 'download.pdf');
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    return res.data;
  }
}
