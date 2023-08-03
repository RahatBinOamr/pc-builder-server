const Builder = require('./PC_Model');

exports.CreateBuilderToDb = async (req, res) => {
  try {
    const data = req.body;
    const result = await Builder.create(data);
    res.status(200).json({
      status: 'success',
      message: 'PC Data Successfully Created',
      data: result,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
exports.findBuildersToDb = async (req, res) => {
  const { category, search, status, sortBy, page, limit } = req.query;
  const filter = {};
  if (search) {
    filter['$or'] = [
      { name: { $regex: search.toString(), $options: 'i' } },
      { category: { $regex: search.toString(), $options: 'i' } },
      { model: { $regex: search.toString(), $options: 'i' } },
    ];
  }
  if (category) {
    filter.category = category;
  }
  if (status) {
    filter.status = status;
  }
  if (sortBy === 'price') {
    products = products.sort({ price: -1 });
  }
  try {
    const builders = await Builder.find(filter)

      .limit(Number(limit))
      .skip(Number(limit) * (Number(page) - 1));
    const totalBuilder = await Builder.countDocuments(filter);
    res.json({
      builders,
      currentPage: Number(page),
      totalPages: Math.ceil(totalBuilder / Number(limit)),
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.findSingleBuildersToDb = async (req, res) => {
  try {
    const result = await Builder.findById(req.params.id);
    res.status(200).json({ result });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.reviewToDb = async (req, res) => {
  try {
    const pcId = req.params.id;
    const reviews = req.body.reviews;

    const result = await Builder.findByIdAndUpdate(
      { _id: pcId },
      { $push: { reviews: reviews } }
    );
    console.log(result);
    if (!result) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'review added successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
