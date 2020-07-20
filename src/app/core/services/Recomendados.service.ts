
// Singleton para service
class RecommendadoService {

    private static instance: RecommendadoService;


    public static getInstance(): RecommendadoService {
        if (!RecommendadoService.instance) {
            RecommendadoService.instance = new RecommendadoService();
        }

        return RecommendadoService.instance;
    }

    // LOGIC

};

export default RecommendadoService;
