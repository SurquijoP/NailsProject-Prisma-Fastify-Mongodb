module.exports = class NailsDetailsUseCases {
  constructor(prismaRepository) {
    this.prismaRepository = prismaRepository;
  }

  findAllNailsDetails = async () => {
    const [nailsDetails, err] =
      await this.prismaRepository.findAllNailsDetails();
    if (err) return [null, 404, err];
    return [nailsDetails, 200, null];
  };

  findNailsDetailsById = async (nailsDetailsId) => {
    const [nailsDetail, err] = await this.prismaRepository.findNailsDetailsById(
      nailsDetailsId,
    );
    if (err) return [null, 404, err];
    return [nailsDetail, 200, null];
  };

  createNewNailsDetalis = async (nailsDetailPayload) => {
    const [newNailsDetails, err] =
      await this.prismaRepository.createNewNailsDetalis(nailsDetailPayload);
    if (err) return [null, 404, err];
    return [newNailsDetails, 200, null];
  };

  updateNailsDetails = async (nailsDetailsId, nailsDetailPayload) => {
    const [updateNailsDetail, err] =
      await this.prismaRepository.updateNailsDetails(
        nailsDetailsId,
        nailsDetailPayload,
      );
    if (err) return [null, 404, err];
    return [updateNailsDetail, 200, null];
  };

  deleteNailsDetail = async (nailsDetailsId) => {
    const [deleteNailsDetail, err] =
      await this.prismaRepository.deleteNailsDetail(nailsDetailsId);
    if (err) return [null, 404, err];
    return [deleteNailsDetail, 200, null];
  };
};
